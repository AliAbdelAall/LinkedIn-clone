<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, X-Request-Width, Authorization");

$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "todo_db";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);

if ($mysqli->connect_error){
  die("Connection failed: ". $mysqli->connect_error);
}
