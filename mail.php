<?php

	header("Content-Type: text/html; charset=utf-8");
	
	if(isset($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER["HTTP_X_REQUESTED_WITH"]) === "xmlhttprequest") {
	
		if(!isset($_POST["name"]) || !isset($_POST["email"]) || isset($_POST["subject"]) || !isset($_POST["message"])) {

			die();

		}
	
		function send_form($message) {
	
			$mail_to = "eduard.tymoshuk@gmail.com";
			$subject = "Лист з контактної форми";
			$headers = "MIME-Version: 1.0\r\n";
			$headers .= "Content-type: text/html; charset=utf-8\r\n";
			$headers .= "From: Система повідомлень <no-reply@".$_SERVER['HTTP_HOST'].">\r\n";

			mail($mail_to, $subject, $message, $headers);
		
		}

		$name = strip_tags($_POST["name"]);
		$email = strip_tags($_POST["email"]); 
		$mess = strip_tags($_POST["message"]); 
		$subj = strip_tags($_POST["subject"]); 

		if(!preg_match("|^([a-z0-9_.-]{1,20})@([a-z0-9.-]{1,20}).([a-z]{2,4})|is", strtolower($email))) { 

			echo "E-mail вказано не корректно.";

			die();

		}

		if($mess == "") { 

			echo "Не вказаний текст повідомлення.";

			die();

		}

		if($name == "") {

			$name = "Не вказано";

		}

		$message = <<<HTML

			<b>Ім'я</b>: {$name}<br>
			<b>E-mail</b>: {$email}<br>
			<b>Тема</b>: {$subj}<br>
			<b>Текст письма</b>: {$mess}

HTML;

		send_form($message);
		
		echo "Ваше повідомлення успішно надіслано. Я відповім вам у найблищий час. Гарного дня!";

	} else {

		die();

	}

?>
