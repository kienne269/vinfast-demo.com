<?php
header("Access-Control-Allow-Origin:*");
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Request-With");

include_once('../../config/contacts.php');
include_once('../../model/post/post.php');

$db = new db();
$connect = $db->connect();

$post = new post($connect);

$data = json_decode(file_get_contents("php://input"));

$post->image = $data->image;
$post->title = $data->title;
$post->content = $data->content;
$post->username = $data->username;
$post->published_at = $data->published_at;

if ($post->create()) {
    echo json_encode(array('message', 'User Created'));
} else {
    echo json_encode(array('message', 'User Not Created'));
}
