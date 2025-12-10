<?php
// server/auth/register.php
require_once __DIR__ . '/../db_connect.php';
require_once __DIR__ . '/../config.php';
header('Content-Type: text/plain');

$input = json_decode(file_get_contents('php://input'), true);
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$password = $input['password'] ?? '';

if (!$name || !$email || !$password) {
    http_response_code(400); echo 'Name, email, password required'; exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400); echo 'Invalid email'; exit;
}

// check exists
$stmt = $mysqli->prepare("SELECT id FROM users WHERE email = ?");
$stmt->bind_param('s', $email);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows > 0) {
    http_response_code(409); echo 'Email already registered'; exit;
}

// create user
$hash = password_hash($password, PASSWORD_DEFAULT);
$verify_token = bin2hex(random_bytes(24));

$stmt = $mysqli->prepare("INSERT INTO users (name,email,phone,password_hash,verify_token) VALUES (?,?,?,?,?)");
$phone = null;
$stmt->bind_param('sssss', $name, $email, $phone, $hash, $verify_token);
if ($stmt->execute()) {
    $userId = $stmt->insert_id;
    // send verification email
    $verifyLink = BASE_URL . "/server/auth/verify_email.php?token=" . urlencode($verify_token);
    $subject = "Verify your SekhoTech account";
    $message = "Hi $name,\n\nClick to verify your account:\n$verifyLink\n\nIf you didn't register, ignore.";
    $headers = "From: " . MAIL_FROM_NAME . " <" . MAIL_FROM . ">\r\n";
    // try to send email
    if (mail($email, $subject, $message, $headers)) {
        http_response_code(200); echo 'Registered. Check your email to verify your account.';
    } else {
        // email failed — still register but inform user
        http_response_code(200); echo 'Registered. Verification email could not be sent (server mail not configured).';
    }
} else {
    http_response_code(500); echo 'Registration failed';
}
