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

                  $query = "CREATE TABLE albums
                          (
                          ID float NOT NULL AUTO_INCREMENT,
                          user_id varchar(10) NOT NULL,
                          script_link varchar(255),
                          album_name varchar(30),
                          cover_link varchar(255),
                          PRIMARY KEY (ID)
                          )
                  )";

                  if ($conn->query($query) === TRUE) {
                      header( 'Location: http://hoclaptrinhweb.esy.es/Lab_DHBK/Lab7/lab7.php');
                  } else {
                      echo "Error: " . $query . "<br>" . $conn->error;
                  }

                  $conn->close();
?>