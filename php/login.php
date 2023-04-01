<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
require 'functions.php';
$title = "Halaman Login";
require_once 'header.php';
require_once 'footer.php';

if (isset($_POST["login"])) {
    $username = htmlspecialchars($_POST["username"]);
    $password = htmlspecialchars($_POST["password"]);

    $result = mysqli_query($koneksi, "SELECT * FROM tbl_user WHERE username = '$username'");

    // cek username
    if ( mysqli_num_rows($result) === 1 ){

        // cek password terlebih dahulu
        $row = mysqli_fetch_assoc($result);
        if ( password_verify($password, $row["password"]) ){
            header("location: index.php");
            exit;
        }
    }

    $error = true;
}
// anjay keren

?>