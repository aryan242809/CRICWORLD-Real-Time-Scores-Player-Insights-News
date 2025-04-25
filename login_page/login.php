<?php
session_start();
$conn = new mysqli("localhost", "root", "", "user_auth");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $result = $conn->query("SELECT * FROM users WHERE email='$email'");
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user["password"])) {
        $_SESSION["user"] = $user["username"];
        header("Location: home.html");
        exit();
    } else {
        echo "Invalid email or password! <a href='index.html'>Try Again</a>";
    }
}
?>
