<?php 
/*echo "1";
echo shell_exec("python3 /var/www/html/speechy.py");
echo "2";
*/

$title="1"; 
$url="https://s.bundesliga.com/assets/img/1140000/1131540_original.jpg"; 
$url1="https://s.bundesliga.com/assets/img/1140000/1131540_original.jpg"; 

$posts[] = array('description'=> $title, 'link'=> $url, 'type'=> $url1);



$response['kitten'] = $posts;
echo json_encode($response)  ?>
