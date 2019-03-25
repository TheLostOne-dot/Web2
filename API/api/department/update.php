<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Department.php';

    $database = new Database();
    $db = $database->connect();
    
    $department = new Department($db);

    $data = json_decode(file_get_contents("php://input"));

    $department->id = $data->id;
    $department->code = $data->code;
    $department->city = $data->city;
    $department->employees = $data->employees;

    if($department->update()) {
        echo json_encode(
            array('message' => 'department updated')
        );
    } else {
        echo json_encode(
            array('message' => 'department not updated')
        );
    }