<?php
class Block3
{
    private $conn;

    // thông tin block1
    public $id_xe;
    public $slug;
    public $dongxe;
    public $slogan;
    public $name;
    public $description1;
    public $description2;
    public $description3;
    public $description4;
    public $image;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read data
    public function read()
    {
        $query = "SELECT * FROM list_car";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }
}
