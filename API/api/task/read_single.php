<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Task.php';

    $database = new Database();
    $db = $database->connect();

    $task = new Task($db);

    $task->id = isset($_GET['id']) ? $_GET['id'] : die();

    $task->read_single();

    $task_arr = array(
        'id' => $task->id,
        'goal' => $task->goal,
        'start_date' => $task->start_date,
        'end_date' => $task->end_date,
        'employees' => $task->employees
    );
    
    print_r(json_encode($task_arr));