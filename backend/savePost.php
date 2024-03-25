<?php
include("connection.php");

$content = $_POST['content'];
$post_image = $_POST['post_image'];
$user_id = $_POST['user_id'];

$query = $mysqli -> prepare('INSERT INTO posts (content, post_image, user_id) VALUES (?, ?, ?)');
$query -> bind_param("ssi", $content, $post_image, $user_id);
if($query -> execute()){
  $response['status'] = "success";
  $response['message'] = "post saved successfully";;

}else{
  $response['status'] = "failed";
  $response['message'] = "post not saved";
}

echo json_encode($response);