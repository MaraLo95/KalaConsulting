<?php

if (isset($_POST['submit'])){
	$name = $_POST['name'];
	$company = $_POST['company'];
	$email = $_POST['email'];
	$text = $_POST['text'];

	$mailTo = "makieric95@gmail.com";
	$headers = "From: ".$email;
	$txt = "You have received an e-mail from ".$name."\n\n".$text;
	mail($mailTo, $company, $txt, $headers);
	header("Location: ONAMA.html");

}
?>