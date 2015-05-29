<?php
	$file_name = $_POST['name'];
	$json = $_POST['json'];

   if (json_decode($json) != null) { /* sanity check */
     $file = fopen($file_name,'w+');
     fwrite($file, $json);
     fclose($file);
   } else {
     // handle error 
   }
?>