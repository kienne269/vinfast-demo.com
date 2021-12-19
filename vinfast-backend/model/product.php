<?php
class Product
{
    private $conn;

    // thông tin xe
    public $id_xe;
    public $slug;
    public $dongxe;
    public $slogan;
    public $name;
    public $description;
    public $logo;
    public $logoVin;
    public $image;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read data
    public function read()
    {
        $query = "SELECT * FROM list_car ORDER BY id_xe DESC";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }
}
