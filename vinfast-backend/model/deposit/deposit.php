<?php
class DepositLuxSa
{
    private $conn;

    // thông tin block1
    public $id;
    public $name;
    public $count;
    public $image;
    public $color;
    public $colorCode;
    public $price;
    public $deposits;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read data
    public function read()
    {
        $query = "SELECT * FROM full_color_car where name = 'LUX-SA'";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }
}
