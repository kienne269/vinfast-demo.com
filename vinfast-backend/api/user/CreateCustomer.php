<?php

// require '../../config/contacts.php';
// header("Access-Control-Allow-Origin: http://localhost:3000");
// header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
// header("Access-Control-Allow-Headers: Content-Type, Authorization");

// $postdata = file_get_contents("php://input");
// if (isset($postdata) && !empty($postdata)) {
//     $request = json_decode($postdata);


//     $name = $request->name;
//     $email = $request->email;
//     $password = $request->password;
//     $sql = "INSERT INTO vinfast_signin (name,email,password) VALUES ('$name','$email','$password')";
//     if (mysqli_query($db, $sql)) {
//         http_response_code(201);
//     } else {
//         http_response_code(422);
//     }
// }
header("Access-Control-Allow-Origin:*");
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Request-With");

include_once('../../config/contacts.php');
include_once('../../model/Customer.php');

$db = new db();
$connect = $db->connect();

$customer = new Customer($connect);

$data = json_decode(file_get_contents("php://input"));

$customer->name = $data->name;
$customer->email = $data->email;
$customer->password = $data->password;

if ($customer->create()) {
    echo json_encode(array('message', 'User Created'));
} else {
    echo json_encode(array('message', 'User Not Created'));
}
