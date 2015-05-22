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

                  $query = "INSERT INTO `public_album`(`album_id`, `album_name`, `user_id`, `user_first_name`, `user_last_name`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5])";

                  if ($conn->query($query) === TRUE) {
                      header( 'Location: http://hoclaptrinhweb.esy.es/Lab_DHBK/Lab7/lab7.php');
                  } else {
                      echo "Error: " . $query . "<br>" . $conn->error;
                  }

                  $conn->close();
?>