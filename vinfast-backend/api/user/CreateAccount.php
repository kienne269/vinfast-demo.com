<?php
header("Access-Control-Allow-Origin:*");
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Request-With");

include_once('../../config/contacts.php');
include_once('../../model/Account.php');

$db = new db();
$connect = $db->connect();

$account = new Account($connect);

$data = json_decode(file_get_contents("php://input"));

$account->name = $data->name;
$account->email = $data->email;
$account->password = $data->password;

if ($account->create()) {
    echo json_encode(array('message', 'User Created'));
} else {
    echo json_encode(array('message', 'User Not Created'));
}
