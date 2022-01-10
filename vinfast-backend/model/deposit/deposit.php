<?php
class Deposit
{
    private $conn;

    // thông tin block1
    public $id;
    public $name;
    public $count;
    public $image;
    public $color;
    public $color2;
    public $colorCode;
    public $price;
    public $deposits;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read data LUX-SA2.0
    public function readLuxSa()
    {
        $query = "SELECT * FROM full_color_car where name = 'LUX SA2.0'";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }

    //read data LUX-A2.0
    public function readLuxA()
    {
        $query = "SELECT * FROM full_color_car where name = 'LUX A2.0'";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }

    //read data FADIL
    public function readFADIL()
    {
        $query = "SELECT * FROM full_color_car where name = 'FADIL'";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }

    //read data PRESIDENT
    public function readPRESIDENT()
    {
        $query = "SELECT * FROM full_color_car where name = 'PRESIDENT'";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }

    //read data VFE-34
    public function readVFE34()
    {
        $query = "SELECT * FROM full_color_car where name = 'VF e34'";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }
}
