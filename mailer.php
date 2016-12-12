<?php
//if statment checks if all 4 values are set and are posted from the ajax 
if( isset($_POST['n']) && isset($_POST['e']) && isset($_POST['m']) && isset($_POST['s']) ){ 
   //Local php variables for the values of n,e,s,m
	$n = $_POST['n']; // HINT: use preg_replace() to filter the data
	$e = $_POST['e']; 
	$s = $_POST['s'];
	$m = nl2br($_POST['m']); //n12br function changes new lines in the message to break tages<br> to keep the structure of the message
	$to = "info@sportomaticapp.com";	//email to which the contact form is sent to
	$from = $e; //form user email
	$subject = $s; //email subject
	$message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>'; //email message
	$headers = "From: $from\n"; 
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n"; //allows the use of html elements in the email
	//return to ajax success or error message from server side
	if( mail($to, $subject, $message, $headers) ){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}
?>