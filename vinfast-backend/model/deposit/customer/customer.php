<?php
class Customer
{
    private $conn;

    // thông tin customer
    public $id;
    public $order_id;
    public $name_car;
    public $color_car;
    public $image_car;
    public $name;
    public $phone;
    public $cccd;
    public $email;
    public $province;
    public $money_deposit;
    public $note;
    public $file;
    public $published_at;
    public $status;

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

    //read count customer in current month
    public function readMonth()
    {
        $query = "SELECT count(id) as count,
                        YEAR(published_at) as year,
                        MONTH(published_at) as month 
                FROM vinfast_customer 
                WHERE YEAR(CURRENT_DATE) = YEAR(published_at)
                GROUP BY YEAR(published_at),
                        MONTH(published_at) 
                ORDER BY YEAR(published_at),
                        MONTH(published_at)";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }

    //create data
    public function create()
    {
        $query = "INSERT INTO vinfast_customer SET id=:id, name=:name, phone=:phone, cccd=:cccd, email=:email, province=:province, money_deposit:=money_deposit";

        $stmt = $this->conn->prepare($query);

        //clean data
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->cccd = htmlspecialchars(strip_tags($this->cccd));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->province = htmlspecialchars(strip_tags($this->province));
        $this->money_deposit = htmlspecialchars(strip_tags($this->money_deposit));

        //bind data
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':phone', $this->phone);
        $stmt->bindParam(':cccd', $this->cccd);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':province', $this->province);
        $stmt->bindParam(':money_deposit', $this->money_deposit);

        if ($stmt->execute()) {
            return true;
        }
        printf("Error %s, \n" . $stmt->error);
        return false;
    }

    //show data by id
    public function show()
    {
        $query = "SELECT * FROM vinfast_customer WHERE id = ? LIMIT 1";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $this->id = $row['id'];
        $this->order_id = $row['order_id'];
        $this->name_car = $row['name_car'];
        $this->color_car = $row['color_car'];
        $this->name = $row['name'];
        $this->phone = $row['phone'];
        $this->cccd = $row['cccd'];
        $this->email = $row['email'];
        $this->province = $row['province'];
        $this->money_deposit = $row['money_deposit'];
        $this->note = $row['note'];
        $this->file = $row['file'];
        $this->published_at = $row['published_at'];
        $this->status = $row['status'];
    }

    //show data by user
    public function showByUser()
    {
        $query = "SELECT * FROM vinfast_customer WHERE vinfast_customer.email = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->email);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return $stmt;
    }

    //update data
    public function update()
    {
        $query = "UPDATE vinfast_customer SET status=:status WHERE id =:id";

        $stmt = $this->conn->prepare($query);

        //clean data
        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->id = htmlspecialchars(strip_tags($this->id));

        //bind data
        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':id', $this->id);
        if ($stmt->execute()) {
            return true;
        }
        printf("Error %s, \n" . $stmt->error);
        return false;
    }
}
