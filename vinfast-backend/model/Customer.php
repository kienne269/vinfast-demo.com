<?php
class Customer
{
    private $conn;

    // thông tin user
    public $name;
    public $email;
    public $password;

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
        $query = "INSERT INTO vinfast_customer SET name=:name, email=:email, password=:password";

        $stmt = $this->conn->prepare($query);

        //clean data
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));

        //bind data
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password', $this->password);

        if ($stmt->execute()) {
            return true;
        }
        printf("Error %s, \n" . $stmt->error);
        return false;
    }
}
