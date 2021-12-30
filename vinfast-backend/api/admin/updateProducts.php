<?php

header("Access-Control-Allow-Origin:*");
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header("Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Request-With");

include_once('../../config/contacts.php');
include_once('../../model/admin/products.php');

$db = new db();
$connect = $db->connect();

$product = new Product($connect);

$data = json_decode(file_get_contents("php://input"));

$product->id = $data->id;
$product->name = $data->name;
$product->color = $data->color;
$product->image = $data->image;
$product->count = $data->count;
$product->price = $data->price;
$product->deposits = $data->deposits;

if ($product->update()) {
    echo json_encode(array('message', 'User Updated'));
} else {
    echo json_encode(array('message', 'User Not Updated'));
}
