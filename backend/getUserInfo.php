<?php
include("connection.php");

$user_id = $_GET['user_id'];

$query = $mysqli->prepare("
SELECT *
FROM users 
WHERE user_id = ?");

$query->bind_param("i", $user_id);
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();

if ($num_rows == 0){
  $response['status'] = "user not found";
}else{ 
  $query->bind_result($user_id, $email, $password, $f_name, $l_name,	$user_profile, $education, $experience,	$skills, $bio);
  while($query -> fetch()){
    $user_info = [
      "email" => $email,
      "first_name" => $f_name,
      "last_name" => $l_name,
      "user_profile" =>	$user_profile ? $user_profile : "",
      "education" => $education ? $education : "",
      "experience" => $experience ? $experience : "",
      "skills" => $skills ? $skills : "",
      "bio" => $bio ? $bio : ""
    ];
  }
  $response['status'] = "success";
  $response['user_info'] = $user_info;
} 

echo json_encode($response);