<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Department.php';

    $database = new Database();
    $db = $database->connect();

    $department = new Department($db);

    $result = $department->read();
    $rows = $result->rowCount();

    if($rows > 0) {
        $department_arr = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
 
            $department_item = array(
                'id' => $ID,
                'code' => $CODE,
                'city' => $CITY,
            );

            array_push($department_arr, $department_item);
        }

        echo json_encode($department_arr);
    } else {
        echo json_encode(
            array('no departments found')
        );
    }