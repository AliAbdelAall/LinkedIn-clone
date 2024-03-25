<?php
include("connection.php");

$query = $mysqli -> prepare('
SELECT u.f_name, u.l_name, u.user_profile, p.post_id, p.content, p.post_image, p.user_id 
FROM posts p
JOIN users u
ON p.user_id = u.user_id');
$query -> execute();
$query -> store_result();
$num_rows = $query -> num_rows();

if($num_rows === 0){
  $response['status'] = "empty";
  $response['message'] = "no posts found"; 

}else{
  $posts_list = [];
  $query -> bind_result($f_name, $l_name, $user_profile, $post_id, $content, $post_image, $user_id);
  while($query -> fetch()){
    $post = [
      "first_name" => $f_name,
      "last_name" => $l_name,
      "user_profile" => $user_profile,
      "post_id" => $post_id,
      "content" => $content,
      "post_image" => $post_image,
      "user_id" => $user_id
    ];
      $posts_list[] = $post;
  }
  $response['status'] = "success";
  $response['posts'] = $posts_list;
}

echo json_encode($response);