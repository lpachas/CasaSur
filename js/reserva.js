$(document).ready(function () {
        $(function() {
    		$('#check').click(function() {
        		if ($(this).is(':checked')) {
            		$('#btn_reservar').removeAttr('disabled');
        		}else {
            		$('#btn_reservar').attr('disabled', 'disabled');
        		}
    		});
		});
                $('#fecha1').datepicker({
                 	startDate: new Date(),
                	language: "es",
                    format: "dd/mm/yyyy",
                    orientation: "bottom auto",
                    autoclose:"true",
                   todayHighlight: true 
                   

                });  
                $('#fecha2').datepicker({
					startDate: new Date(),
                	language: "es",
                    format: "dd/mm/yyyy",
                    orientation: "bottom auto",
                    autoclose:"true",
                    todayHighlight: true
                    
                });  
            
            });

function limpiar(){
    $('#nombre').val('');
    $('#email').val('');
    $('#fono').val('');
    $('#habitacion').val($('#habitacion > option:first').val());
    $('#num_hab').val($('#num_hab > option:first').val());
    $('#num_pers').val($('#num_pers > option:first').val());
    $('#fecha_ingreso').val('');
    $('#fecha_salida').val('');
    $('#mensaje').val('');
    $('#btn_reservar').attr('disabled', 'disabled');
    $("#check").prop("checked", "");
}
     

     $('#btn_reservar').on('click',function(e){
     	e.preventDefault();
     	var nombre = $('#nombre').val();
     	var email = $('#email').val();
     	var fono = $('#fono').val();
     	var habitacion = $('#habitacion').val();
     	var num_hab = $('#num_hab').val();
     	var num_pers = $('#num_pers').val();
     	var fecha_ingreso = $('#fecha_ingreso').val();
     	var fecha_salida = $('#fecha_salida').val();
     	var mensaje = $('#mensaje').val();
     	var datos = {'nombre':nombre,'email':email,'fono':fono,'habitacion':habitacion,'num_hab':num_hab,
     	'num_pers':num_pers,'fecha_ingreso':fecha_ingreso,'fecha_salida':fecha_salida,'mensaje':mensaje};
     	

     	$.ajax({
     		url: 'php/enviar.php',
            type:'post' ,
            datatype: 'json',
            data: datos,
            success:function(data){
             if (data == 1) {
                console.log('mensaje enviado');
             	$('#respuesta').addClass('exito').html('Reserva enviada').show(300).delay(3000).hide(300);
                limpiar();
             }else{
             	$('#respuesta').addClass('error').html('Por favor rellene todos los campos').show(300).delay(3000).hide(300);
             }
            }
     	});
     });