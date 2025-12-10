<?php
// server/auth/login.php
require_once __DIR__ . '/../db_connect.php';
session_start();
header('Content-Type: text/plain');

$input = json_decode(file_get_contents('php://input'), true);
$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';

if (!$email || !$password) {
    http_response_code(400); echo 'Email and password required'; exit;
}

$stmt = $mysqli->prepare("SELECT id, password_hash, is_verified, name FROM users WHERE email = ?");
$stmt->bind_param('s', $email);
$stmt->execute();
$stmt->bind_result($id, $password_hash, $is_verified, $name);
if ($stmt->fetch()) {
    if (!password_verify($password, $password_hash)) {
        http_response_code(401); echo 'Invalid credentials'; exit;
    }
    // optional: require email verification
    // if (!$is_verified) { http_response_code(403); echo 'Please verify your email first'; exit; }

    // set session
    $_SESSION['user_id'] = $id;
    $_SESSION['user_name'] = $name;
    http_response_code(200); echo 'OK';
} else {
    http_response_code(401); echo 'Invalid credentials'; exit;
}
