<?php
header('Access-Control-Allow-Origin: *');

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASS = '';
const DB_NAME = 'martech_casetas';


$connection = mysqli_connect( DB_HOST, DB_USER, DB_PASS, DB_NAME);
if(!$connection){
    echo json_encode("Connection Failed :(");
}