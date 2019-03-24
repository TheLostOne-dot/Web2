<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Employee.php';

    $database = new Database();
    $db = $database->connect();

    $employee = new Employee($db);

    $employee->id = isset($_GET['id']) ? $_GET['id'] : die();

    $employee->read_single();

    $employee_arr = array(
        'id' => $employee->id,
        'name' => $employee->name,
        'salary' => $employee->salary,
        'phone_number' => $employee->phone_number,
        'address' => $employee->address,
        'email' => $employee->email,
        'department_id' => $employee->department_id,
        'task_id' => $employee->task_id
    );

    print_r(json_encode($employee_arr));