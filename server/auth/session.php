<?php
// server/auth/session.php
require_once __DIR__ . '/../db_connect.php';
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['user_id'])) {
    $id = $_SESSION['user_id'];
    $stmt = $mysqli->prepare("SELECT id, name, email FROM users WHERE id = ?");
    $stmt->bind_param('i', $id);
    $stmt->execute();
    $res = $stmt->get_result();
    $user = $res->fetch_assoc();
    echo json_encode(['user' => $user]);
} else {
    echo json_encode(['user' => null]);
}
