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
    echo "";

    $query = "INSERT INTO user (id, first_name,last_name, email, password, gender) 
    	VALUES ('".$_POST["id"]."','".$_POST["first_name"]."','".$_POST["last_name"]."','".$_POST["email"]."','".$_POST["password"]."','".$_POST["gender"].")";
	if ($conn->query($query) === TRUE) {
        echo "ok!"
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }

    $conn->close();
?>