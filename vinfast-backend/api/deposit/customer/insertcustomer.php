<?php
header("Access-Control-Allow-Origin:*");
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Request-With");

include_once('../../../config/contacts.php');
include_once('../../../model/deposit/customer/customer.php');
$db = new db();
$connect = $db->connect();

$customer = new Customer($connect);

$data = json_decode(file_get_contents("php://input"));

$customer->id = $data->id;
$customer->name = $data->name;
$customer->phone = $data->phone;
$customer->cccd = $data->cccd;
$customer->email = $data->email;
$customer->province = $data->province;
$customer->referralCode = $data->referralCode;

if ($customer->create()) {
    echo json_encode(array('message', 'User Created'));
} else {
    echo json_encode(array('message', 'User Not Created'));
}
