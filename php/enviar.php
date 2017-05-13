<?php

if (!empty($_POST['nombre']) && !empty($_POST['email']) && !empty($_POST['fono']) && !empty($_POST['habitacion']) && !empty($_POST['num_hab']) && !empty($_POST['num_pers']) && !empty($_POST['fecha_ingreso']) && !empty($_POST['fecha_salida']) && !empty($_POST['mensaje'])) {
	/*$destino="reservas@casasur.pe";*/
	/*$destino="lpachas.73@gmail.com";
$nombre= $_POST["nombre"];
$mail= $_POST["email"];
$fono= $_POST["fono"];
$habitacion= $_POST["habitacion"];
$num_hab= $_POST["num_hab"];
$num_pers= $_POST["num_pers"];
$fecha_ingreso= $_POST["fecha_ingreso"];
$fecha_salida=$_POST["fecha_salida"];
$mensaje= $_POST["mensaje"];
$contenido="Nombre: " . $nombre . "\n
Correo: " . $mail . "\n
Teléfono: " . $fono . "\n
Dirección: " . $direccion . "\n
Habitación: " . $habitacion . "\n
N° de Habitación: " . $num_hab . "\n
N° de Personas: " . $num_pers . "\n
Fecha de Ingreso: " .$fecha_ingreso . "\n
Fecha de Salida: " .$fecha_salida . "\n

Comentario: " . $mensaje;

mail($destino, "Contacto desde Casa Sur", $contenido);*/
echo 1;
}
else{
	echo 2;
}

?>
