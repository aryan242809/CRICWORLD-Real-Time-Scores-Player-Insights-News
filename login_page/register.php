<?php
session_start();
$conn = new mysqli("localhost", "root", "", "user_auth");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Registration successful! <a href='index.html'>Login Here</a>";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
