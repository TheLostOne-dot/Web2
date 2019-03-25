<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Department.php';

    $database = new Database();
    $db = $database->connect();

    $department = new Department($db);

    $department->id = isset($_GET['id']) ? $_GET['id'] : die();

    if($department->delete()) {
        echo json_encode(
            array('message' => 'department deleted')
        );
    } else {
        echo json_encode(
            array('message' => 'department not deleted')
        );
    }