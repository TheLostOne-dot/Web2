<?php
    class Employee {
        private $conn;

        public $id;
        public $name;
        public $salary;
        public $phone_number;
        public $address;
        public $email;
        public $department_id;
        public $task_id;

        public function __construct($db) {
            $this->conn = $db;
        }

        public function read() {
            $query = 'SELECT ID, NAME, SALARY, PHONE_NUMBER, ADDRESS, EMAIL, DEPARTMENT_ID, TASK_ID
                      FROM EMPLOYEE
                      ORDER BY ID';
                      
            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }

        public function read_single() {
            $query = 'SELECT ID, NAME, SALARY, PHONE_NUMBER, ADDRESS, EMAIL, DEPARTMENT_ID, TASK_ID
                      FROM EMPLOYEE
                      WHERE ID = ?
                      LIMIT 0,1';

            $stmt = $this->conn->prepare($query);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->id = $row['ID'];
            $this->name = $row['NAME'];
            $this->salary = $row['SALARY'];
            $this->phone_number = $row['PHONE_NUMBER'];
            $this->address = $row['ADDRESS'];
            $this->email = $row['EMAIL'];
            $this->department_id = $row['DEPARTMENT_ID'];
            $this->task_id = $row['TASK_ID'];
        }

        public function create() {
            $query = 'INSERT INTO `EMPLOYEE`(`NAME`, `SALARY`, `PHONE_NUMBER`, `ADDRESS`, `EMAIL`, `DEPARTMENT_ID`, `TASK_ID`) 
                      VALUES (:name, :salary, :phone_number, :address, :email, :department_id, :task_id)';

            $stmt = $this->conn->prepare($query);

            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->salary = htmlspecialchars(strip_tags($this->salary));
            $this->phone_number = htmlspecialchars(strip_tags($this->phone_number));
            $this->address = htmlspecialchars(strip_tags($this->address));
            $this->email = htmlspecialchars(strip_tags($this->email));
            $this->department_id = htmlspecialchars(strip_tags($this->department_id));
            $this->task_id = htmlspecialchars(strip_tags($this->task_id));

            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':salary', $this->salary);
            $stmt->bindParam(':phone_number', $this->phone_number);
            $stmt->bindParam(':address', $this->address);
            $stmt->bindParam(':email', $this->email);
            
            if ($this->department_id == null) {
                $this->department_id = NULL;
            } 

            if ($this->task_id == null) {
                $this->task_id = NULL;
            }

            $stmt->bindParam(':department_id', $this->department_id);
            $stmt->bindParam(':task_id', $this->task_id);

            if($stmt->execute()) {
                return true;
            }

            printf($stmt->error);

            return false;
        }

        public function update() {
            $query = 'UPDATE `EMPLOYEE` 
                      SET `NAME`=:name, `SALARY`=:salary,`PHONE_NUMBER`=:phone_number, `ADDRESS`=:address,
                          `DEPARTMENT_ID`=:department_id, `TASK_ID`=:task_id,
                          `EMAIL`=:email 
                      WHERE ID = :id';

            $stmt = $this->conn->prepare($query);

            $this->id = htmlspecialchars(strip_tags($this->id));
            $this->name = htmlspecialchars(strip_tags($this->name));
            $this->salary = htmlspecialchars(strip_tags($this->salary));
            $this->phone_number = htmlspecialchars(strip_tags($this->phone_number));
            $this->address = htmlspecialchars(strip_tags($this->address));
            $this->email = htmlspecialchars(strip_tags($this->email));
            $this->department_id = htmlspecialchars(strip_tags($this->department_id));
            $this->task_id = htmlspecialchars(strip_tags($this->task_id));

            $stmt->bindParam(':id', $this->id);
            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(':salary', $this->salary);
            $stmt->bindParam(':phone_number', $this->phone_number);
            $stmt->bindParam(':address', $this->address);
            $stmt->bindParam(':email', $this->email);

            if ($this->department_id == null) {
                $this->department_id = NULL;
            } 

            if ($this->task_id == null) {
                $this->task_id = NULL;
            }

            $stmt->bindParam(':department_id', $this->department_id);
            $stmt->bindParam(':task_id', $this->task_id);

            if($stmt->execute()) {
                return true;
            }

            printf($stmt->error);

            return false;
        }

        public function delete() {
            $query = 'DELETE FROM `EMPLOYEE`
                      WHERE ID = :id';

            $stmt = $this->conn->prepare($query);

            $this->id = htmlspecialchars(strip_tags($this->id));

            $stmt->bindParam(':id', $this->id);

            if($stmt->execute()) {
                return true;
            }

            printf($stmt->error);

            return false;
        }
    }