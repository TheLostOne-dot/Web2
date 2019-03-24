<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Employee.php';

    $database = new Database();
    $db = $database->connect();

    $employee = new Employee($db);

    $data = json_decode(file_get_contents("php://input"));

    $employee->name = $data->name;
    $employee->salary = $data->salary;
    $employee->phone_number = $data->phone_number;
    $employee->address = $data->address;
    $employee->email = $data->email;
    $employee->department_id = $data->department_id;
    $employee->task_id = $data->task_id;
    

    if($employee->create()) {
        echo json_encode(
            array('message' => 'employee created')
        );
    } else {
        echo json_encode(
            array('message' => 'employee not created')
        );
    }