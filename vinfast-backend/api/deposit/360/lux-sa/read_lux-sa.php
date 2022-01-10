<?php
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');

include_once('../../../../config/contacts.php');
include_once('../../../../model/deposit/360/test.php');

$db = new db();
$connect = $db->connect();

$deposit = new Deposit($connect);
$read360LuxSa = $deposit->read360LuxSa();

$num = $read360LuxSa->rowCount();

if ($num > 0) {
    $deposit_array = [];
    $deposit_array['data'] = [];

    while ($row = $read360LuxSa->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $views360_item = array(
            'id' => $id,
            'name_car' => $name_car,
            'image' => $image,
            'image1' => $image1,
            'image2' => $image2,
            'image3' => $image3,
            'image4' => $image4,
            'image5' => $image5,
            'image6' => $image6,
            'image7' => $image7,
            'image8' => $image8,
            'image9' => $image9,
            'image10' => $image10,
        );
        array_push($deposit_array['data'], $views360_item);
    }
    echo json_encode(($deposit_array));
}
