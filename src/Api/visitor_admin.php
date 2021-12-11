<?php
$connection = "";
require_once("db.php");

$fecha = date("YYYY-MM-DD");
$inicio = $fecha . " 00:00:00";
$fin = $fecha . " 23:59:59";

$data = array();
$query = "SELECT * FROM agregar_visita_admin WHERE agregar_visita_admin.visita_fecha BETWEEN '$inicio' AND '$fin'" ;
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
