<?php

/**************** INFO FROM FORM ****************/
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$firstname =  $request->firstName;
@$lastname = $request->lastName;
@$email = $request->email;
@$phonenumber = $request->phoneNumber;
@$mailinglist = $request->mailingList;
echo $firstname;

/**************** CONNECTING TO SERVER ****************/
$servername = "localhost";
$username = "root";
$password = "";

$connection = new mysqli($servername, $username, $password);
if(mysqli_connect_errno()){
  exit("Connect failed: " . mysqli_connect_error());
}

/**************** QUERIES ****************/
$query = "CREATE DATABASE IF NOT EXISTS saved";

$sql = "CREATE TABLE IF NOT EXISTS users(
first_name VARCHAR(20),
last_name VARCHAR(50),
email VARCHAR(50),
phone_number INT(10),
mailing_list TINYINT(1)
)";

$user = "INSERT INTO users (first_name, last_name, email, phone_number, mailing_list) VALUES('$firstname', '$lastname', '$email', '$phonenumber', '$mailinglist')";

/**************** CREATING DATABASE ****************/
// creating database
if($connection -> query($query) === TRUE){
  mysqli_select_db($connection, "saved");
  // echo "Database 'saved' successfully created";

  // creating table
  if($connection -> query($sql) === TRUE){
    // echo "Table 'users' successfully created";

    // creating columns
    if($connection -> query($user) === TRUE){
      // echo "User saved";
    }

    // ERRORS
    else{
      echo "Insert Error: " . $connection->error;
    }
  }
  else{
    echo "Table Error: " . $connection -> error;
  }
}
else{
  echo "Database Error: " . $connection -> error;
}
$connection->close();
?>
