<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Task.php';

    $database = new Database();
    $db = $database->connect();

    $task = new Task($db);

    $data = json_decode(file_get_contents("php://input"));

    $task->goal = $data->goal;
    $task->start_date = $data->start_date;
    $task->end_date = $data->end_date;

    if($task->create()) {
        echo json_encode(
            array('message' => 'task created')
        );
    } else {
        echo json_encode(
            array('message' => 'task not created')
        );
    }