<?php
include_once('../contacts.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$db = new db();
$connect = $db->connect();

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $id = $request->id;
    $name = $request->name;
    $phone = $request->phone;
    $cccd = $request->cccd;
    $email = $request->email;
    $password = $request->password;
    $province = $request->province;
    $sql = "INSERT INTO vinfast_customer VALUES ('$id', '$name', '$phone', '$cccd', '$email', '$password', '$province')";
    // if (mysqli_query($db, $sql)) {
    //     http_response_code(201);
    // } else {
    //     http_response_code(422);
    // }
}
