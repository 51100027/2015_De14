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

        $sql = "INSERT INTO user (ID, firs_tname, last_name, email, gender)
              VALUES ('2323453', 'An', 'Nguyen', 'annguyence@gmail.com.com', 'chưa xác định');";

        $sql .= "INSERT INTO user (ID, first_name, last_name, email, gender)
              VALUES ('4223453', 'Tan', 'Nguyen', 'tanbua@gmail.com.com', 'chưa xác định');";

        $sql .= "INSERT INTO user (ID, first_name, last_name, email, gender)
              VALUES ('7623453', 'Doan', 'Bien', 'bkactus89@gmail.com.com', 'chưa xác định')";

        if ($conn->multi_query($sql) === TRUE) {
               echo "New records created successfully";
        } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
?>s