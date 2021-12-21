<?php
class Block2
{
    private $conn;

    // thông tin block1
    public $id;
    public $quote;
    public $author;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read data
    public function read()
    {
        $query = "SELECT * FROM block2";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }
}
