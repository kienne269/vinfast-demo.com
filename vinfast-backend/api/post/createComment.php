<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers:Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../../config/contacts.php');
include_once('../../model/post/post.php');

$db = new db();
$connect = $db->connect();

$comment_post = new Post($connect);

$data = json_decode(file_get_contents("php://input"));

// $comment_post->comment_id = $data->comment_id;
$comment_post->content = $data->content;
$comment_post->user_id = $data->user_id;
$comment_post->post_id = $data->post_id;
$comment_post->published_at = $data->published_at;

require __DIR__ . '../../../vendor/autoload.php';

$options = array(
    'cluster' => 'ap1',
    'useTLS' => true
);
$pusher = new Pusher\Pusher(
    'c9858b741ded216e8ece',
    '6d4b273d997644dee7a2',
    '1349031',
    $options
);
$response = $pusher->trigger('my-channel', 'create-comment', $data);

if ($comment_post->createComment()) {
    echo json_encode(array('message', 'Question Created'));
} else {
    echo json_encode(array('message', 'Question Not Created'));
}
