<?php
$connection = "";
require_once("db.php");

$_POST = json_decode(file_get_contents("php://input"), true);

$fecha = $_POST['fecha'];
$id = $_GET['id'];
$query = "UPDATE agregar_visita_admin SET visita_fecha = '$fecha' WHERE id ='$id'";

$result = mysqli_query($connection, $query);

if ($result) {
    echo json_encode("Success." . $query);
} else {
    echo json_encode("Failed." . $query);
}
