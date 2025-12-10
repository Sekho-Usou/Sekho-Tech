<?php
// server/auth/reset_password.php
require_once __DIR__ . '/../db_connect.php';
require_once __DIR__ . '/../config.php';
header('Content-Type: text/plain');

$input = json_decode(file_get_contents('php://input'), true);

// 1) Request reset: { email }
if (isset($input['email']) && empty($input['token']) && empty($input['new_password'])) {
    $email = trim($input['email']);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { http_response_code(400); echo 'Invalid email'; exit; }

    $stmt = $mysqli->prepare("SELECT id, name FROM users WHERE email = ?");
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $stmt->bind_result($id, $name);
    if ($stmt->fetch()) {
        $token = bin2hex(random_bytes(24));
        $expires = date('Y-m-d H:i:s', time() + 60*60); // 1 hour
        $upd = $mysqli->prepare("UPDATE users SET reset_token = ?, reset_expires = ? WHERE id = ?");
        $upd->bind_param('ssi', $token, $expires, $id);
        $upd->execute();

        $resetLink = BASE_URL . "/server/auth/reset_password.php?token=" . urlencode($token);
        $subject = "SekhoTech password reset";
        $message = "Hi $name,\n\nClick to reset your password:\n$resetLink\n\nThis link expires in 1 hour.";
        $headers = "From: " . MAIL_FROM_NAME . " <" . MAIL_FROM . ">\r\n";
        if (mail($email, $subject, $message, $headers)) {
            echo 'Reset link sent to your email.';
        } else {
            echo 'Could not send email. Contact admin.';
        }
    } else {
        // Do not reveal whether email exists — but for UX we respond same text
        echo 'If an account exists for that email, a reset link has been sent.';
    }
    exit;
}

// 2) Perform reset: expecting { token, new_password }
if (isset($input['token']) && isset($input['new_password'])) {
    $token = $input['token'];
    $new_password = $input['new_password'];
    if (strlen($new_password) < 6) { http_response_code(400); echo 'Password too short'; exit; }

    $stmt = $mysqli->prepare("SELECT id, reset_expires FROM users WHERE reset_token = ?");
    $stmt->bind_param('s', $token);
    $stmt->execute();
    $stmt->bind_result($id, $expires);
    if ($stmt->fetch()) {
        if (strtotime($expires) < time()) { http_response_code(400); echo 'Token expired'; exit; }
        $hash = password_hash($new_password, PASSWORD_DEFAULT);
        $upd = $mysqli->prepare("UPDATE users SET password_hash = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?");
        $upd->bind_param('si', $hash, $id);
        if ($upd->execute()) {
            echo 'Password reset. You may now login.';
        } else {
            http_response_code(500); echo 'Failed to reset password';
        }
    } else {
        http_response_code(400); echo 'Invalid token';
    }
    exit;
}

// Show a simple HTML form if token param present (for manual reset via link)
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['token'])) {
    $token = htmlspecialchars($_GET['token']);
    echo '<!doctype html><html><head><meta charset="utf-8"><title>Reset Password</title></head><body>';
    echo '<h3>Reset Password</h3>';
    echo '<form method="post"><input type="hidden" name="token" value="'. $token .'"><input name="new_password" placeholder="New password" type="password"><button>Reset</button></form>';
    echo '</body></html>';
    exit;
}

// If web-form posted, process it (simple fallback)
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['token']) && isset($_POST['new_password'])) {
    $token = $_POST['token'];
    $new_password = $_POST['new_password'];
    // perform the same server-side logic as above (but simpler)
    $stmt = $mysqli->prepare("SELECT id, reset_expires FROM users WHERE reset_token = ?");
    $stmt->bind_param('s', $token);
    $stmt->execute();
    $stmt->bind_result($id, $expires);
    if ($stmt->fetch()) {
        if (strtotime($expires) < time()) { echo 'Token expired'; exit; }
        $hash = password_hash($new_password, PASSWORD_DEFAULT);
        $upd = $mysqli->prepare("UPDATE users SET password_hash = ?, reset_token = NULL, reset_expires = NULL WHERE id = ?");
        $upd->bind_param('si', $hash, $id);
        if ($upd->execute()) {
            echo 'Password reset. You may close this window and login.';
        } else { echo 'Failed to reset'; }
    } else { echo 'Invalid token'; }
    exit;
}

http_response_code(400);
echo 'Bad request';
