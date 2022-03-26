
<?
$name = $_POST{'name'};
$email = $_POST{'email'};
$message = $_POST['message'];

$email_message = "
    Name: ".$name."
    Email: ".$email."
    Message: ".$message."
";

mail ("gutierrezanicamaluisalberto@hotmail.com", "Consulta web", $email_message);
?>
