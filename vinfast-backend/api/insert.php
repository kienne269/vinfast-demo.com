<?php
include_once('./contacts.php');
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$db = new db();
$connect = $db->connect();

$product = new Product($connect);
$read = $product->read();

$num = $read->rowCount();

$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $email = $request->email;
    $password = $request->password;
    $sql = "INSERT INTO vinfast_login (email,password) VALUES ('$email', '$password')";
    if (mysqli_query($db, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}
