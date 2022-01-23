<?php
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

$connect = mysqli_connect('localhost', 'root', '', 'vinfast_db');

if (isset($_POST['name'])) {
    $files = $_FILES['file'];
    $name = mysqli_real_escape_string($connect, $_POST['name']);
    $phone = mysqli_real_escape_string($connect, $_POST['phone']);
    $cccd = mysqli_real_escape_string($connect, $_POST['cccd']);
    $email = mysqli_real_escape_string($connect, $_POST['email']);
    $province = mysqli_real_escape_string($connect, $_POST['province']);
    $referralCode = mysqli_real_escape_string($connect, $_POST['referralCode']);
    $note = mysqli_real_escape_string($connect, $_POST['note']);
    $published_at = mysqli_real_escape_string($connect, $_POST['published_at']);

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
            $file_destination = '../../../../vinfast-frontend/public/images/customer/' . $new_file_name;
            if (move_uploaded_file($templocation, $file_destination)) {
                $connection = "INSERT INTO vinfast_customer (name, phone, cccd, email, province, referralCode, note, file,  published_at) VALUES ('$name', '$phone' ,'$cccd', '$email', '$province', '$referralCode',  '$note', 'http://localhost:3000/images/customer/$new_file_name', '$published_at')";
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
