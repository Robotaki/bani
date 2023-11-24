<?php
$message = $_POST['message'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = htmlspecialchars($message);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$message = urldecode($message);
$email = urldecode($email);
$phone = urldecode($phone);
$message = trim($message);
$email = trim($email);
$phone = trim($phone);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("akm1985.85@yandex.ru", "Заявка с сайта", "E-mail: ".$email. " Ваш номер: ".$phone. " Сообщение: ".$message, "From: sibtime@gmail.com \r\n")) { 
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>
