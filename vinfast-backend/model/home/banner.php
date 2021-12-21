<?php
class Banner
{
    private $conn;

    // thông tin block1
    public $id;
    public $placement;
    public $banner;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read data
    public function read()
    {
        $query = "SELECT * FROM banner";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }
}
