<?php
class Post
{
    private $conn;

    // thông tin user
    public $id;
    public $image;
    public $title;
    public $excerpt;
    public $content;
    public $views_count;
    public $views_heart;
    public $views_comment;
    public $username;
    public $published_at;

    //connect db
    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read data
    public function read()
    {
        $query = "SELECT * FROM list_post";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }

    //create data
    public function create()
    {
        $query = "INSERT INTO list_post SET image=:image, title=:title, content=:content, username=:username, published_at=:published_at";

        $stmt = $this->conn->prepare($query);

        //clean data
        $this->image = htmlspecialchars(strip_tags($this->image));
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->content = htmlspecialchars(strip_tags($this->content));
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->published_at = htmlspecialchars(strip_tags($this->published_at));

        //bind data
        $stmt->bindParam(':image', $this->image);
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':content', $this->content);
        $stmt->bindParam(':username', $this->username);
        $stmt->bindParam(':published_at', $this->published_at);

        if ($stmt->execute()) {
            return true;
        }
        printf("Error %s, \n" . $stmt->error);
        return false;
    }
}
