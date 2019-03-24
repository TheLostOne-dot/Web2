<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Employee.php';

    $database = new Database();
    $db = $database->connect();

    $employee = new Employee($db);

    $result = $employee->read();
    $rows = $result->rowCount();

    if($rows > 0) {
        $employee_arr = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
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

            array_push($employee_arr, $employee_item);
        }

        echo json_encode($employee_arr);
    } else {
        echo json_encode(
            array('no employees found')
        );
    }