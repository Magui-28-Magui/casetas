<?php
$connection = "";
require_once("db.php");

$visitante_id = $_GET['v_id'];

$data = array();
$query = "SELECT * FROM agregar_visita_admin WHERE id = $visitante_id";
$result = mysqli_query($connection, $query);
while ($row = mysqli_fetch_array($result)) {

    $id = $row['id'];
    $nombre = $row['visita_nombre'];
    $empresa = $row['visita_empresa'];
    $contacto = $row['visita_contacto'];
    $proposito = $row['visita_proposito'];
    $fecha = $row['visita_fecha'];

    $data[] = array("id" => $id, "nombre" => $nombre, "empresa" => $empresa, "contacto" => $contacto, "proposito" => $proposito, "fecha" => $fecha);
}

echo json_encode(array('visitante' => $data));
