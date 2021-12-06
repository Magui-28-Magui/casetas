<?php
$connection ="";
require_once ("db.php");
header('Access-Control-Allow-Origin: *');

$data = array();
$query = "SELECT * FROM visitantes";
$result = mysqli_query($connection, $query);
while ($row = mysqli_fetch_array($result)){

    $id = $row['visitante_id'];
    $nombre = $row['visitante_nombre'];
    $empresa = $row['visitante_empresa'];
    $contacto = $row['visitante_contacto'];
    $proposito = $row['visitante_proposito'];
    $fecha = $row['visitante_fecha'];

    $data[] = array("id" => $id, "nombre" =>$nombre, "empresa" =>$empresa, "contacto" =>$contacto, "proposito" =>$proposito, "fecha" => $fecha);


}

echo json_encode(array('visitante'=>$data));