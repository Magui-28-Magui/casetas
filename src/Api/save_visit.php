<?php
$connection ="";
require_once ("db.php");

$_POST = json_decode(file_get_contents("php://input"),true);


$tipo ="Visita";

if(isset($_POST['planta_id']))
{
    $planta_id = $_POST['planta_id'];
}
else{
   $planta_id = 0;
}

if(isset($_POST['nombre'])){
    $nombre = $_POST['nombre'];
}
else{
   $nombre = "N/A";
}

if(isset($_POST['empresa'])){
    $empresa = $_POST['empresa'];
}
else{
   $empresa = "N/A";
}

if(isset($_POST['nombre'])){
    $contacto = $_POST['contacto'];
}
else{
   $contacto = "N/A";
}

if(isset($_POST['proposito'])){
    $proposito = $_POST['proposito'];
}
else{
   $proposito = "N/A";
}

$fecha = $_POST['fecha'];
$visita_entrada = date("Y-m-d H:i:s");

$query = "INSERT INTO registro_visitas (visita_tipo, planta_id, visita_nombre, visita_empresa, visita_contacto, visita_proposito, visita_fecha, visita_entrada)
VALUES ('$tipo','$planta_id','$nombre', '$empresa', '$contacto', '$proposito', '$fecha', '$visita_entrada')";

$result = mysqli_query($connection, $query);

if($result)
{
    echo json_encode("Success." . $query);
}
else
{
    echo json_encode("Failed." . $query);
}
