<?php
    class Task {
        private $conn;

        public $id;
        public $goal;
        public $start_date;
        public $end_date;
        public $employees = array();

        public function __construct($db) {
            $this->conn = $db;
        }

        public function read() {
            $query = 'SELECT ID, GOAL, START_DATE, END_DATE
                      FROM TASK';
                      
            $stmt = $this->conn->prepare($query);

            $stmt->execute();

            return $stmt;
        }

        public function read_single() {
            $query = 'SELECT ID, GOAL, START_DATE, END_DATE
                      FROM TASK
                      WHERE ID = ?
                      LIMIT 0,1';

            $stmt = $this->conn->prepare($query);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $this->id = $row['ID'];
            $this->goal = $row['GOAL'];
            $this->start_date = $row['START_DATE'];
            $this->end_date = $row['END_DATE'];

            $query = 'SELECT ID, NAME, SALARY, PHONE_NUMBER, ADDRESS, EMAIL, DEPARTMENT_ID, TASK_ID
                      FROM EMPLOYEE
                      WHERE TASK_ID = ?';

            $stmt = $this->conn->prepare($query);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);

                $employee_item = array(
                'id' => $ID,
                'name' => $NAME,
                'salary' => $SALARY,
                'phone_number' => $PHONE_NUMBER,
                'address' => $ADDRESS,
                'email' => $EMAIL,
                'department_id' => $DEPARTMENT_ID,
                'task_id' => $TASK_ID
                );

                array_push($this->employees, $employee_item);
            }
        }

        public function create() {
            $query = 'INSERT INTO `TASK`(`GOAL`, `START_DATE`, `END_DATE`) 
                      VALUES (:goal, :start_date, :end_date)';

            $stmt = $this->conn->prepare($query);

            $this->goal = htmlspecialchars(strip_tags($this->goal));
            $this->start_date = htmlspecialchars(strip_tags($this->start_date));
            $this->end_date = htmlspecialchars(strip_tags($this->end_date));

            $this->start_date = date('Y-m-d', strtotime(str_replace('-', '/', $this->start_date)));
            $this->end_date = date('Y-m-d', strtotime(str_replace('-', '/', $this->end_date)));


            $stmt->bindParam(':goal', $this->goal);
            $stmt->bindParam(':start_date', $this->start_date);
            $stmt->bindParam(':end_date', $this->end_date);

            if($stmt->execute()) {
                return true;
            }

            printf($stmt->error);

            return false;
        }

        public function update() {
            $query = 'UPDATE `TASK` 
                      SET `GOAL`=:goal,`START_DATE`=:start_date,`END_DATE`=:end_date 
                      WHERE ID = :id';

            $stmt = $this->conn->prepare($query);

            $this->id = htmlspecialchars(strip_tags($this->id));
            $this->goal = htmlspecialchars(strip_tags($this->goal));
            $this->start_date = htmlspecialchars(strip_tags($this->start_date));
            $this->end_date = htmlspecialchars(strip_tags($this->end_date));
            
            $this->start_date = date('Y-m-d', strtotime(str_replace('-', '/', $this->start_date)));
            $this->end_date = date('Y-m-d', strtotime(str_replace('-', '/', $this->end_date)));

            $stmt->bindParam(':id', $this->id);
            $stmt->bindParam(':goal', $this->goal);
            $stmt->bindParam(':start_date', $this->start_date);
            $stmt->bindParam(':end_date', $this->end_date);

            if($stmt->execute()) {
                return true;
            }

            printf($stmt->error);

            return false;
        }

        public function delete() {
            $query = 'DELETE FROM `TASK`
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