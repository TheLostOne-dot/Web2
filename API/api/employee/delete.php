<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Employee.php';

    $database = new Database();
    $db = $database->connect();

    $employee = new Employee($db);

    $employee->id = isset($_GET['id']) ? $_GET['id'] : die();

    if($employee->delete()) {
        echo json_encode(
            array('message' => 'employee deleted')
        );
    } else {
        echo json_encode(
            array('message' => 'employee not deleted')
        );
    }