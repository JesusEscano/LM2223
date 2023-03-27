var objetos = {
  monitor: 0,
  router: 0,
  key: 0,
  mou: 0
};

function valores(objeto, cambio) {
  objetos[objeto] += cambio;
  var loquesea = "c" + objeto;
  var valor = objetos[objeto];
  if (valor < 0) {
    objetos[objeto] = 0;
    document.getElementById(loquesea).innerHTML = "En carrito: " + objetos[objeto];
  } else if (valor === 0) {
    document.getElementById(loquesea).innerHTML = "";
  } else {
    document.getElementById(loquesea).innerHTML = "En carrito: " + objetos[objeto];
  }


  guarda();
}

function onloadCarrito() {
  var loquesea, valor;
  for (var objeto in objetos) {
    loquesea = "c" + objeto;
    valor = objetos[objeto];
    if (valor > 0) {
      document.getElementById(loquesea).innerHTML = "En carrito: " + valor;
    }
    guarda();
  }
}

function vacia() {
    objetos.monitor = 0;
    objetos.router = 0;
    objetos.key = 0;
    objetos.mou = 0;
    
    document.getElementById("cmonitor").innerHTML = "";
    document.getElementById("crouter").innerHTML = "";
    document.getElementById("ckey").innerHTML = "";
    document.getElementById("cmou").innerHTML = "";
    
    document.getElementById("monitor-cantidad").innerHTML = "0";
    document.getElementById("router-cantidad").innerHTML = "0";
    document.getElementById("key-cantidad").innerHTML = "0";
    document.getElementById("mou-cantidad").innerHTML = "0";
    
    guarda();
  }

function guarda() {
  localStorage.setItem("objetos", JSON.stringify(objetos));
}

function toggleDetails(id) {
  const details = document.getElementById(id);
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

function cargarValores() {
  const objetosString = localStorage.getItem("objetos");
  if (objetosString) {
    objetos = JSON.parse(objetosString);
  }
  if (objetos.monitor === 0 || objetos.monitor=="" || objetos.monitor==null) {
    if (document.getElementById("moni")) {document.getElementById("moni").innerHTML = "";}
  } else {
    if (document.getElementById("moni")) {document.getElementById("moni").innerHTML = objetos.monitor + " ROG Strix XG27AQM EVA EDITION = " + objetos.monitor * 733.89 + " €";}
  }
  if (objetos.router === 0 || objetos.router =="" || objetos.router==null) {
    if (document.getElementById("rout")) {document.getElementById("rout").innerHTML = "";}
  } else {
    if (document.getElementById("rout")) {document.getElementById("rout").innerHTML = objetos.router +" ROG RAPTURE GT-AX6000 EVA EDITION = " +objetos.router * 499 +" €";}
  }
  if (objetos.key === 0 || objetos.key =="" || objetos.key==null) {
    if (document.getElementById("tecl")) {document.getElementById("tecl").innerHTML = "";}
  } else {
    if (document.getElementById("tecl")) {document.getElementById("tecl").innerHTML = objetos.key + " ROG Strix Scope RX EVA Edition = " + objetos.key * 169 + " €";}
  }
  if (objetos.mou === 0 || objetos.mou =="" || objetos.mou==null) {
    if (document.getElementById("rato")) {document.getElementById("rato").innerHTML = "";}
  } else {
    if (document.getElementById("rato")) {document.getElementById("rato").innerHTML = objetos.mou +" ROG Keris Wireless EVA Edition = " +objetos.mou * 115.88 +" €";}
  }
  if (document.getElementById("total")) {document.getElementById("total").innerHTML ="TOTAL = " +(objetos.monitor * 733.89 + objetos.router * 499 +objetos.key * 169 +objetos.mou * 115.88).toFixed(2) +" €";
  }
}

window.addEventListener("load", cargarValores);

function comprobacion(){ 
        var correo = document.getElementById("correo").value;
        var mailcom = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        var DNI = document.getElementById("DNI").value;
        var numero=8;
        var contador=parseInt(DNI.length);
        var DNIc=DNI%23;
        var opciones="TRWAGMYFPDXBNJZSQVHLCKET";
        var DNIL=opciones.substring(DNIc,DNIc+1);
        if(correo==""){document.getElementById("fmail").style.color = "red"; document.getElementById("fmail").innerHTML = " Por favor, introduzca una dirección de correo"} else if(!mailcom.exec(correo)){document.getElementById("fmail").style.color = "red"; document.getElementById("fmail").innerHTML = " Por favor, introduzca una dirección de correo correcta"} else{document.getElementById("fmail").innerHTML=""}
        if(DNI==""){document.getElementById("fdni").style.color = "red"; document.getElementById("fdni").innerHTML = " Por favor, introduzca su número de DNI"} else if(contador!=numero){document.getElementById("fdni").style.color = "red"; document.getElementById("fdni").innerHTML = " Por favor, introduzca un DNI correcto"}else{document.getElementById("fdni").innerHTML=""}    
        }


  function fValidarTarjeta()   {
          // Obtiene el tipo de tarjeta seleccionado y el número de tarjeta ingresado
          var opt = $("#lstTipoTarjeta option:selected").val();
          var codigo = $("#nro_tarjeta").val().replace(/-/g, ''); // quita los guiones del número de tarjeta
          var cvv = $("#cvv").val();
          var valit = $("#valit").val();
        
          // Expresiones regulares para validar los diferentes tipos de tarjeta
          var VISA = /^4[0-9]{12}(?:[0-9]{3})?$/;
          var MASTERCARD = /^5[1-5][0-9]{14}$/;
          var AMEX = /^3[47][0-9]{13}$/;
          var CABAL = /^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/;
          var NARANJA = /^(589562|402917|402918|527571|527572|0377798|0377799)\d{10}$/;
        
          // Validación del número de tarjeta
          var valido = false;
          if (opt == "VISA") {
            valido = VISA.test(codigo);
          } else if (opt == "MASTERCARD") {
            valido = MASTERCARD.test(codigo);
          } else if (opt == "AMEX") {
            valido = AMEX.test(codigo);
          } else if (opt == "CABAL") {
            valido = CABAL.test(codigo);
          } else if (opt == "NARANJA") {
            valido = NARANJA.test(codigo);
          }
        
          // Validación de la fecha de validez
          var hoy = new Date();
          var valitDate = new Date(valit);
          if (valitDate < hoy) {
            $("#fvalit").css("color", "red");
            $("#fvalit").text(" La tarjeta ha caducado");
            valido = false;
          } else {
            $("#fvalit").text("");
          }
        
          // Validación del CVV de seguridad
          var CVV = /^[0-9]{3,4}$/;
          if (!CVV.test(cvv)) {
            $("#fcvv").css("color", "red");
            $("#fcvv").text(" Introduzca un CVV válido");
            valido = false;
          } else {
            $("#fcvv").text("");
          }
        
          // Validación del número de tarjeta mediante el algoritmo de Luhn
          if (!valido) {
            $("#ftarj").css("color", "red");
            $("#ftarj").text(" Por favor, introduzca un número de tarjeta válido para el tipo seleccionado");
          } else if (!luhn(codigo)) {
            $("#ftarj").css("color", "red");
            $("#ftarj").text(" Por favor, introduzca un número de tarjeta válido");
          } else {
            $("#ftarj").text("");
          }
          return valido;
        }
        
function luhn(value) {
      // Accept only digits, dashes or spaces
      if (/[^0-9-\s]+/.test(value)) return false;
      // The Luhn Algorithm. It's so pretty.
      let nCheck = 0, bEven = false;
      value = value.replace(/\D/g, "");
      for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n),
          nDigit = parseInt(cDigit, 10);
          if (bEven && (nDigit *= 2) > 9) nDigit -= 9; nCheck +=  nDigit; bEven = !bEven;
      }
      return (nCheck % 10) == 0;
  
  }

function todook(){
  var correo = document.getElementById("correo").value;
  var mailcom = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  var DNI = document.getElementById("DNI").value;
  var numero=8;
  var contador=parseInt(DNI.length);
  var DNIc=DNI%23;
  var opciones="TRWAGMYFPDXBNJZSQVHLCKET";
  var DNIL=opciones.substring(DNIc,DNIc+1);
  var opt = $("#lstTipoTarjeta option:selected").val();
  var codigo = $("#nro_tarjeta").val().replace(/-/g, ''); 
  var VISA = /^4[0-9]{12}(?:[0-9]{3})?$/;
  var MASTERCARD = /^5[1-5][0-9]{14}$/;
  var AMEX = /^3[47][0-9]{13}$/;
  var CABAL = /^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/;
  var NARANJA = /^(589562|402917|402918|527571|527572|0377798|0377799)\d{10}$/;
  
  var correoValido = (correo !== "" && mailcom.exec(correo));
  var dniValido = (DNI !== "" && contador === numero);
  var tarjetaValida = fValidarTarjeta();
  if (correoValido && dniValido && tarjetaValida) {
    document.getElementById("aceptada").style.color = "green"; document.getElementById("aceptada").innerHTML = " Gracias por realizar su pedido.";
}}



        
        
        
        