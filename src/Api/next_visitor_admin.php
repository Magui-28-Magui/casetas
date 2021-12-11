<?php
$connection = "";
require_once("db.php");

$data = array();
$fecha = date("Y-m-d");
$inicio = $fecha . " 00:00:00";
$fin = $fecha . " 23:59:59";
$query = "SELECT * FROM agregar_visita_admin WHERE agregar_visita_admin.visita_fecha > '$fin'";
$result = mysqli_query($connection, $query);

while ($row = mysqli_fetch_array($result)) {
    $id = $row['id'];
    $nombre = $row['visita_nombre'];
    $empresa = $row['visita_empresa'];
    $contacto = $row['visita_contacto'];
    $proposito = $row['visita_proposito'];
    $fecha = $row['visita_fecha'];

    //$data[] = json_encode($row);
    $data[] = array("id" => $id, "nombre" => $nombre, "empresa" => $empresa, "contacto" => $contacto, "proposito" => $proposito, "fecha" => $fecha);
}


//echo json_encode($data);
echo json_encode(array('visitante' => $data));
