<?php
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

$connect = mysqli_connect('localhost', 'root', '', 'vinfast_db');

if (isset($_POST['name'])) {
    $name = mysqli_real_escape_string($connect, $_POST['name']);
    $phone = mysqli_real_escape_string($connect, $_POST['phone']);
    $cccd = mysqli_real_escape_string($connect, $_POST['cccd']);
    $email = mysqli_real_escape_string($connect, $_POST['email']);
    $province = mysqli_real_escape_string($connect, $_POST['province']);
    $referralCode = mysqli_real_escape_string($connect, $_POST['referralCode']);
    $published_at = mysqli_real_escape_string($connect, $_POST['published_at']);
    $order_id = mysqli_real_escape_string($connect, $_POST['order_id']);
    $order_desc = mysqli_real_escape_string($connect, $_POST['order_desc']);
    $connection = "INSERT INTO vinfast_customer (order_id, name, phone, cccd, email, province, referralCode, note,  published_at) VALUES ('$order_id', '$name', '$phone' ,'$cccd', '$email', '$province', '$referralCode', '$order_desc', '$published_at')";
    if (mysqli_query($connect, $connection)) {
        echo 'success';
    } else {
        echo 'could not insert data into the database';
    }
}
