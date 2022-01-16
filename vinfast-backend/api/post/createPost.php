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

if (isset($_POST['title'])) {
    $files = $_FILES['picture'];
    $title = mysqli_real_escape_string($connect, $_POST['title']);
    $content = htmlspecialchars(mysqli_real_escape_string($connect, $_POST['content']));
    $username = mysqli_real_escape_string($connect, $_POST['username']);
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
            // $file_destination = '../../../vinfast-frontend/src/assets/images/post/' . $new_file_name;
            $file_destination = '../../../vinfast-frontend/public/images/posts/' . $new_file_name;
            if (move_uploaded_file($templocation, $file_destination)) {
                $connection = "INSERT INTO list_post (picture, title, content, username, published_at) VALUES ('$new_file_name', '$title' ,'$content', '$username', '$published_at')";
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
