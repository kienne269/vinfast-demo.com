<?php
class Block4
{
    private $conn;

    // thông tin block4
    public $id_xe;
    public $image;
    public $name;
    public $slogan;
    public $description1;
    public $description2;
    public $description3;
    public $description4;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read data
    public function read()
    {
        $query = "SELECT * FROM list_bike";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }
}
