<?php
// server/protected_action.php
require_once __DIR__ . '/db_connect.php';
session_start();
header('Content-Type: text/plain');

if (!isset($_SESSION['user_id'])) {
    http_response_code(401); echo 'Not authenticated'; exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$action = $input['action'] ?? '';
$user_id = $_SESSION['user_id'];

if ($action === 'request_quote') {
    $service = $input['service'] ?? 'General';
    // Save quote request into contacts table as a message + user_id (or create another table)
    $msg = "Quote requested for: " . $mysqli->real_escape_string($service);
    $stmt = $mysqli->prepare("INSERT INTO contacts (name,phone,email,message,user_id) VALUES (?,?,?,?,?)");
    // fetch user's name/email/phone
    $u = $mysqli->prepare("SELECT name,email,phone FROM users WHERE id = ?");
    $u->bind_param('i', $user_id); $u->execute(); $u->bind_result($n,$e,$p); $u->fetch(); $u->close();

    $stmt->bind_param('ssssi', $n, $p, $e, $msg, $user_id);
    if ($stmt->execute()) {
        echo "Quote requested. We'll contact you shortly.";
    } else {
        http_response_code(500); echo 'Failed to create quote request';
    }
    exit;
}

echo 'Unknown action';
