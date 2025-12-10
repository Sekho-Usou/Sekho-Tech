<?php
// server/submit.php
require_once __DIR__ . '/db_connect.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); exit('Method Not Allowed');
}

$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (!$name || !$phone || !$message) {
    http_response_code(400); exit('Missing required fields');
}

$user_id = $_SESSION['user_id'] ?? null;

$stmt = $mysqli->prepare("INSERT INTO contacts (`name`,`phone`,`email`,`message`,`user_id`) VALUES (?,?,?,?,?)");
$stmt->bind_param('ssssi', $name, $phone, $email, $message, $user_id);
if ($stmt->execute()) {
    // redirect back to homepage with success flag
    header('Location: ../public/index.html?sent=1');
    exit;
} else {
    http_response_code(500);
    exit('Failed to save message');
}
