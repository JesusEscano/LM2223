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
      document.getElementById(loquesea).innerHTML = "En carrito = " + objetos[objeto];
    } else if (valor === 0) {
      document.getElementById(loquesea).innerHTML = "";
    } else {
      document.getElementById(loquesea).innerHTML = "En carrito = " + objetos[objeto];
    }
  }
  
  function detalles(cosa, producto) {
    let stats;
    switch(cosa) {
      case 'cmon':
        stats = "<p>·QHD (2560 x 1440)</p><p>·Fast IPS</p><p>·270Hz</p><p>·0.5 ms (GTG)</p><p>·027''</p><p>·DCI-P3 estándar de cine del 97%</p><p>·sRGB del 150%</p>";
        break;
    case 'crou':
        stats = "<p>·Tasa de datos: <br>2.4GHz AX: 4x4 (Tx/Rx) 1024 QAM 20/40MHz, hasta 1148Mbps<br>5GHz AX: 4x4 (Tx/Rx) 1024 QAM 20/40/80/160MHz, hasta 4804Mbps</p><p>·Procesador: 2.0 GHz quad-core processor</p><p>·Memoria: 256 MB Flash, 1 GB RAM</p><p>·Frecuencia: 2.4G Hz / 5 GHz</p></div>";
        break;
      case 'ckey':
        stats = "<p>·Conectitividad: USB 2.0 (Tipo C-A)</p><p>·Iluminación: Per-Key RGB LEDs</p><p>·Alimentación: USB</p><p>Dimensiones: 440x137x39 mm</p><p>·Peso: 1,06kg</p>";
        break;
      case 'cmou':
        stats = "<p>·Resolución: 16.000 DPI</p><p>·Velocidad máxima: 400 IPS</p><p>·Aceleración máxima: 40 G</p><p>·Conexiones: USB 2.0 (Tipo C-A)</p><p>·Batería: 500m Ah</p>";
        break;
      default:
        stats = "Ese producto aún no está listado adecuadamente";
    }
    document.getElementById('caracteristicas').innerHTML = stats;
  }
  


function guarda(){
  document.getElementById("moni").innerHTML  = "<p>Monitor</p><p>Cantidad: "+monitor+"</p><p>Precio= "+Parseint(monitor)*733.89;
}


function comprobacion(){ 
        var correo = document.getElementById("correo").value;
        var mail = document.getElementById("fmail").value;
        var mailcom = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        var DNI = document.getElementById("DNI").value;
        var numero=8;
        var contador=parseInt(DNI.length);
        var DNIc=DNI%23;
        var opciones="TRWAGMYFPDXBNJZSQVHLCKET";
        var DNIL=opciones.substring(DNIc,DNIc+1);
        if(correo==""){document.getElementById("fmail").style.color = "red"; document.getElementById("fmail").innerHTML = " Por favor, introduzca una dirección de correo"} else if(!mailcom.exec(correo)){document.getElementById("fmail").style.color = "red"; document.getElementById("fmail").innerHTML = " Por favor, introduzca una dirección de correo correcta"} else{document.getElementById("fmail").innerHTML=""}
        if(contador!=numero){document.getElementById("fdni").style.color = "red"; document.getElementById("fdni").innerHTML = " Por favor, introduzca un DNI correcto"}else{document.getElementById("fdni").innerHTML=""}    
    }

