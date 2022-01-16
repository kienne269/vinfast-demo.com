<?php
class Customer
{
    private $conn;

    // thông tin customer
    public $id;
    public $name;
    public $phone;
    public $cccd;
    public $email;
    public $province;
    public $referralCode;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read data
    public function read()
    {
        $query = "SELECT * FROM vinfast_customer";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }

    //create data
    public function create()
    {
        $query = "INSERT INTO vinfast_customer SET id=:id, name=:name, phone=:phone, cccd=:cccd, email=:email, province=:province, referralCode:=referralCode";

        $stmt = $this->conn->prepare($query);

        //clean data
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->cccd = htmlspecialchars(strip_tags($this->cccd));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->province = htmlspecialchars(strip_tags($this->province));
        $this->referralCode = htmlspecialchars(strip_tags($this->referralCode));

        //bind data
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':phone', $this->phone);
        $stmt->bindParam(':cccd', $this->cccd);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':province', $this->province);
        $stmt->bindParam(':referralCode', $this->referralCode);

        if ($stmt->execute()) {
            return true;
        }
        printf("Error %s, \n" . $stmt->error);
        return false;
    }
}
