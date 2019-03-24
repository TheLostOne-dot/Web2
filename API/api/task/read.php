<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Task.php';

    $database = new Database();
    $db = $database->connect();

    $task = new Task($db);

    $result = $task->read();
    $rows = $result->rowCount();

    if($rows > 0) {
        $task_arr = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $task_item = array(
                'id' => $ID,
                'goal' => $GOAL,
                'start_date' => $START_DATE,
                'end_date' => $END_DATE
            );

            array_push($task_arr, $task_item);
        }

        echo json_encode($task_arr);
    } else {
        echo json_encode(
            array('no tasks found')
        );
    }