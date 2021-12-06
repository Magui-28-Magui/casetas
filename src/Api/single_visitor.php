<?php
$connection ="";
require_once ("db.php");

$visitante_id = $_GET['v_id'];

$data = array();
$query = "SELECT * FROM visitantes WHERE visitante_id = $visitante_id";
$result = mysqli_query($connection, $query);
while ($row = mysqli_fetch_array($result)){

    $id = $row['visitante_id'];
    $nombre = $row['visitante_nombre'];
    $empresa = $row['visitante_empresa'];
    $contacto = $row['visitante_contacto'];
    $proposito = $row['visitante_proposito'];
    $fecha = $row['visitante_fecha'];

    //$data[] = json_encode($row);
    $data[] = array("id" => $id, "nombre" =>$nombre, "empresa" =>$empresa, "contacto" =>$contacto, "proposito" =>$proposito, "fecha" => $fecha);


}

//echo json_encode($data);
echo json_encode(array('visitante'=>$data));