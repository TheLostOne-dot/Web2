<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Department.php';

    $database = new Database();
    $db = $database->connect();

    $department = new Department($db);

    $department->id = isset($_GET['id']) ? $_GET['id'] : die();

    $department->read_single();

    $department_arr = array(
        'id' => $department->id,
        'code' => $department->code,
        'city' => $department->city,
        'employees' => $department->employees
    );
    
    print_r(json_encode($department_arr));