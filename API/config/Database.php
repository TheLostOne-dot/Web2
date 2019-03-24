<?php
class Database{
    private $host = "studmysql01.fhict.local";
    private $db_name = "dbi386275_ela";
    private $username = "dbi386275_ela";
    private $password = "CRVU4LADDTJU5X7";
    public $conn;
 
    public function getConnection(){
 
        $this->conn = null;
 
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
 
        return $this->conn;
    }
}
?>