<?php
include("connection.php");

$user_id = $_POST['user_id'];
$user_profile = $_POST['user_profile'];
$experience = $_POST['experience'];
$skills = $_POST['skills'];
$bio = $_POST['bio'];

$query = $mysqli->prepare('
UPDATE users
SET user_profile = ?, experience = ?, skills = ?, bio = ?
WHERE user_id = ?
');
$query->bind_param("ssssi",$user_profile, $experience, $skills, $bio, $user_id);
if($query->execute()){
  $response['status'] = "success";
  $response['message'] = "profile updated successfully";
}else{
  $response['status'] = "failed";
  $response['message'] = "profile updated failed";
}

echo json_encode($response);


