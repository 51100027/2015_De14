<?php
				$servername = "mysql.hostinger.vn";
                  $username = "u501950629_slide";
                  $password = "123456";
                  $dbname = "u501950629_slide";

                  // Create connection
                  $conn = new mysqli($servername, $username, $password, $dbname);

                  // Check connection
                  if ($conn->connect_error) {
                      die("Connection failed: " . $conn->connect_error);
                  } 
                  echo "OK";

                  $query = "INSERT INTO albums (user_id, script_link, album_name, cover_link) VALUES 
                  			('".$_GET["user_id"]."','".$_GET["script_link"]."','".$_GET["album_name"]."','".$_GET["cover_link"]."')";

                  if ($conn->query($query) === TRUE) {
                      header( 'Location: http://hoclaptrinhweb.esy.es/Lab_DHBK/Lab7/lab7.php');
                  } else {
                      echo "Error: " . $query . "<br>" . $conn->error;
                  }

                  $conn->close();
?>