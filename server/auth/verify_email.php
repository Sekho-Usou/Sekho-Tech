<?php
// server/auth/verify_email.php
require_once __DIR__ . '/../db_connect.php';
if (!isset($_GET['token'])) { exit('Missing token'); }
$token = $_GET['token'];
$stmt = $mysqli->prepare("SELECT id FROM users WHERE verify_token = ?");
$stmt->bind_param('s', $token);
$stmt->execute();
$stmt->bind_result($id);
if ($stmt->fetch()) {
    $upd = $mysqli->prepare("UPDATE users SET is_verified = 1, verify_token = NULL WHERE id = ?");
    $upd->bind_param('i', $id);
    $upd->execute();
    echo "Email verified. You can now login.";
} else {
    echo "Invalid or expired token.";
}
