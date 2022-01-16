<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');

include_once('../../config/contacts.php');
include_once('../../model/Account.php');

$db = new db();
$connect = $db->connect();

$account = new Account($connect);
$read = $account->read();

$num = $read->rowCount();

if ($num > 0) {
    $list_account_array = [];
    $list_account_array['data'] = [];

    while ($row = $read->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $list_account_item = array(
            'id' => $id,
            'avatar' => $avatar,
            'name' => $name,
            'email' => $email,
            'password' => $password,
        );
        array_push($list_account_array['data'], $list_account_item);
    }
    echo json_encode(($list_account_array));
}
