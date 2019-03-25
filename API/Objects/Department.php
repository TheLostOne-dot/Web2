<?php
class Department{
 
    private $conn;
    private $table_name = "department";
 
    public $department_id;
    public $department_name;
    public $employee_fk;
 
    public function __construct($db){
        $this->conn = $db;
    }
public function update(){}
public function delete(){}
public function create(){}
public function read(){
 
    // select all query
    $query = "SELECT *  
            FROM
                " . $this->table_name .;
 
    // prepare query statement
    $results = $this->conn->prepare($query);
 
    // execute query
    $results->execute();
 
    return $results;
}
}