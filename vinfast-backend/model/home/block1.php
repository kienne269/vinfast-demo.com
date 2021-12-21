<?php
class Block1
{
    private $conn;

    // thông tin block1
    public $id;
    public $title;
    public $description;
    public $image;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read data
    public function read()
    {
        $query = "SELECT * FROM block1";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }
}
