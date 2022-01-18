<?php

// header("Access-Control-Allow-Origin:*");
// header('Content-Type: application/json');
// header('Access-Control-Allow-Methods: POST');
// header("Access-Control-Allow-Headers:Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Request-With");

// include_once('../../config/contacts.php');
// include_once('../../model/admin/products.php');

// $db = new db();
// $connect = $db->connect();

// $product = new Product($connect);

// $data = json_decode(file_get_contents("php://input"));

// $product->id = $data->id;
// $product->name = $data->name;
// $product->color = $data->color;
// $product->image = $data->image;
// $product->count = $data->count;
// $product->price = $data->price;
// $product->deposits = $data->deposits;

// if ($product->create()) {
//     echo json_encode(array('message', 'User Created'));
// } else {
//     echo json_encode(array('message', 'User Not Created'));
// }

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

$connect = mysqli_connect('localhost', 'root', '', 'vinfast_db');

if (isset($_POST['id'])) {
    $files = $_FILES['image'];
    $id = mysqli_real_escape_string($connect, $_POST['id']);
    $name = mysqli_real_escape_string($connect, $_POST['name']);
    $color = mysqli_real_escape_string($connect, $_POST['color']);
    $count = mysqli_real_escape_string($connect, $_POST['count']);
    $price = mysqli_real_escape_string($connect, $_POST['price']);
    $deposits = mysqli_real_escape_string($connect, $_POST['deposits']);

    //file properties
    $filename = $files['name'];
    $templocation = $files['tmp_name'];
    $uploaderrors = $files['error'];

    $splitedname = explode('.', $filename);
    $fileextension = strtolower(end($splitedname));

    $allowed_extentions = ['png', 'jpg', 'jpeg'];

    if (in_array($fileextension, $allowed_extentions)) {
        if ($uploaderrors === 0) {
            $new_file_name = uniqid() . '.' . $fileextension;
            // $file_destination = '../../../vinfast-frontend/src/assets/images/post/' . $new_file_name;
            $file_destination = '../../../vinfast-frontend/public/images/admin/car/' . $new_file_name;
            if (move_uploaded_file($templocation, $file_destination)) {
                $connection = "INSERT INTO full_color_car (id, name, color, image, count, price, deposits) VALUES ('$id', '$name', '$color', 'http://localhost:3000/images/admin/car/$new_file_name', '$count', '$price', '$deposits')";
                if (mysqli_query($connect, $connection)) {
                    echo 'success';
                } else {
                    echo 'could not insert data into the database';
                }
            }
        } else {
            echo 'there was an error in upload';
        }
    } else {
        echo 'file with this extension is not allowed';
    }
}
