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

        $sql = "SELECT first_name, last_name FROM user";
        $result = $conn->query($sql);

        if($result->num_row > 0){
          echo "<table><tr><th>Họ và tên</th>";
          while ($row = $result->fetch_assoc()) {
            # code...
             echo "<tr><td>".$row["first_name"]." ".$row["last_name"]."</td></tr>";
          }
          echo "</table";
        }
        $conn->close();
?>s