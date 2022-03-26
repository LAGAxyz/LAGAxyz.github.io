
<?
$name = $_POST{'name'};
$email = $_POST{'email'};
$message = $_POST['message'];

$email_message = "
    Name: ".$name."
    Email: ".$email."
    Message: ".$message."
";

mail ("GutierrezAnicamaLuisAlberto@hotmail.com" , "Consulta web (www.laga.xyz)", $email_message);
?>
