<?php
    if ($secureHash == $vnp_SecureHash) {
        if ($_GET['vnp_ResponseCode'] == '00') {
            $order_id = $_GET['vnp_TxnRef'];
            $name = $_GET['name'];
            $money = $_GET['vnp_Amount'] / 100;
            $note = $_GET['vnp_OrderInfo'];
            $vnp_response_code = $_GET['vnp_ResponseCode'];
            $code_vnpay = $_GET['vnp_TransactionNo'];
            $code_bank = $_GET['vnp_BankCode'];
            $time = $_GET['vnp_PayDate'];
            $date_time = substr($time, 0, 4) . '-' . substr($time, 4, 2) . '-' . substr($time, 6, 2) . ' ' . substr($time, 8, 2) . ' ' . substr($time, 10, 2) . ' ' . substr($time, 12, 2);
            // include("../code/modules/kndatabase.php");
            $conn = mysqli_connect('localhost', 'root', '', 'vinfast_db');
            
            $sql = "SELECT * FROM payments WHERE order_id = '$order_id'";
            $query = mysqli_query($conn, $sql);
            $row = mysqli_num_rows($query);

            if ($row > 0) {
                $sql = "UPDATE payments SET order_id = '$order_id', money = '$money', note = '$note', vnp_response_code = '$vnp_response_code', code_vnpay = '$code_vnpay', code_bank = '$code_bank' WHERE order_id = '$order_id'";

                mysqli_query($conn, $sql);
            } else {
                $sql = "INSERT INTO payments(order_id, name_customer, money, note, vnp_response_code, code_vnpay, code_bank, time) VALUES ('$order_id', '$name', '$money', '$note', '$vnp_response_code', '$code_vnpay', '$code_bank','$date_time')";
                mysqli_query($conn, $sql);
            }

            echo "GD Thanh cong";
        } else {
            echo "GD Khong thanh cong";
        }
    } else {
        echo "Chu ky khong hop le";
    }
