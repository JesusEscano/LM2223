$('#ida, #vuelta').click(function() {;
    jQuery(function($) {
$.datepicker.regional['es'] = {
closeText: 'Cerrar',
prevText: '&#x3c;Ant',
nextText: 'Sig&#x3e;',
currentText: 'Hoy',
monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
],
monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
],
dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado'],
dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mi&eacute;', 'Juv', 'Vie', 'S&aacute;b'],
dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&aacute;'],
weekHeader: 'Sm',
dateFormat: 'yy/mm/dd',
firstDay: 1,
isRTL: false,
showMonthAfterYear: false,
yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['es']);
});
$(document).ready(function() {
$(".datepicker").datepicker({
appendText: 
  ' <br/>Haga click para introducir una fecha<br>'+
  'Para cambiar de mes, clic en los extremos superiores del calendario'
});
});
$( "#ida" ).datepicker({ minDate: 1, maxDate: "+1M", regional: "es",  
onSelect: function(selectedDate) {var fechab = $(this).datepicker("getDate");
fechab.setDate(fechab.getDate());
$( "#vuelta" ).datepicker("option", "minDate", fechab);} });
$( "#vuelta" ).datepicker({ minDate: 1, maxDate: "", regional: "es" });
} );
//var checkBox = document.getElementById("idayvuelta");
//  if (checkBox.checked == true){
//    return 4;
//  } else {
//    return 0;
//  }

$("form").submit(function(e){
e.preventDefault();
});


$("#dale").click(function() {
var nombre = $("#name").val();
var apellidos = $("#surname").val();
var mail = $("#email").val();
var dni = $("#dni").val();
var entrada = $("#ida").val();
var salida = $("#vuelta").val();
function codigoAleatorio() {
    let abecedario =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
  var cd='';
  for(i = 1; i<=23;i++){
    cd += abecedario[(Math.random()*(abecedario.length-1)).toFixed(0)];
  }
  return cd;
}
var localizador = $("codigoAleatorio").val();
document.getElementById("resumen").innerHTML = '<p>Nombre: '+nombre+'</p><p>Apellidos: '+apellidos
    +'</p><p>Email: '+mail+'</p><p>DNI: '+dni+'</p><p>Fecha de ida: '+entrada+'</p><p>Localizador: '+localizador;

});
