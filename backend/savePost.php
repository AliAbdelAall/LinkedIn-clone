<?php
include("connection.php");

$content = $_POST['content'];
$image = $_POST['image'];
$user_id = $_POST['user_id'];

$query = $mysqli -> prepare('INSERT INTO posts (content, image, user_id) VALUES (?, ?, ?)');
$query -> bind_param("sbi", $content, $image, $user_id);
if($query -> execute()){
  $response['status'] = "sucsess";
  $response['message'] = "post saved successfully";;

}else{
  $response['status'] = "failed";
  $response['message'] = "post not saved";
}

echo json_encode($response);