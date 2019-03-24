<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json;charset=UTF-8');

    include_once '../../config/Database.php';
    include_once '../../Objects/Department.php';

    $database = new Database();
    $db = $database->getConnection();

    $department = new Department($db);

    $result = $department->read();
    $rows = $result->rowCount();

    if($rows > 0) {
        $department_arr = array();
        $department_arr["records"]=array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
 
            $department_item = array(
                'department_id' => $department_id,
                'department_name' => $department_name,
                'employee_fk' => $employee_fk
            );

            array_push($department_arr["records"], $department_item);
        }
        http_response_code(200);

        echo json_encode($department_arr);
    } else {
        http_response_code(404);
        echo json_encode(
            array('message'=>'no departments found')
        );
    }