
var monitor=0;
function sumamon() {
    monitor+=1
    document.getElementById("cmon").innerHTML = "En carrito = "+monitor;
}
function restamon() {
    if (monitor<=1){document.getElementById("cmon").innerHTML = ""}
    else {monitor-=1
    document.getElementById("cmon").innerHTML = "En carrito = "+monitor};
}
var router=0;
function sumarou() {
    router+=1
    document.getElementById("crou").innerHTML = "En carrito = "+router;
}
function restarou() {
    if (router<=1){document.getElementById("crou").innerHTML = ""}
    else {router-=1
    document.getElementById("crou").innerHTML = "En carrito = "+router};
}
var key=0;
function sumakey() {
    key+=1
    document.getElementById("ckey").innerHTML = "En carrito = "+key;
}
function restakey() {
    if (key<=1){document.getElementById("ckey").innerHTML = ""}
    else {key-=1
    document.getElementById("ckey").innerHTML = "En carrito = "+key};
}
var mou=0;
function sumamou() {
    mou+=1
    document.getElementById("cmou").innerHTML = "En carrito = "+mou;
}
function restamou() {
    if (mou<=1){document.getElementById("cmou").innerHTML = ""}
    else {mou-=1
    document.getElementById("cmou").innerHTML = "En carrito = "+mou};
}
 var isContentVisible = false;

function carmon() {
    const contentElement = document.getElementById("cmon");
    if (isContentVisible) {
        contentElement.innerHTML = "";
        isContentVisible = false;
      } else {
        contentElement.innerHTML = "<p>·QHD (2560 x 1440)</p><p>·Fast IPS</p><p>·270Hz</p><p>·0.5 ms (GTG)</p><p>·027''</p><p>·DCI-P3 estándar de cine del 97%</p><p>·sRGB del 150%</p>";
        isContentVisible = true;
      }}
function carou() {
    const contentElement = document.getElementById("crou");
    if (isContentVisible) {
        contentElement.innerHTML = "";
        isContentVisible = false;
      } else {
        contentElement.innerHTML = "<p>C·Tasa de datos: <br>2.4GHz AX: 4x4 (Tx/Rx) 1024 QAM 20/40MHz, hasta 1148Mbps<br>5GHz AX: 4x4 (Tx/Rx) 1024 QAM 20/40/80/160MHz, hasta 4804Mbps</p><p>·Procesadro: 2.0 GHz quad-core processor</p><p>·Memoria: 256 MB Flash, 1 GB RAM</p><p>·Frecuencia: 2.4G Hz / 5 GHz</p></div>";
        isContentVisible = true;
    }}
function carkey() {
    const contentElement = document.getElementById("ckey");
    if (isContentVisible) {
        contentElement.innerHTML = "";
        isContentVisible = false;
      } else {
        contentElement.innerHTML = "<p>·Conectitividad: USB 2.0 (Tipo C-A)</p><p>·Iluminación: Per-Key RGB LEDs</p><p>·Alimentación: USB</p><p>Dimensiones: 440x137x39 mm</p><p>·Peso: 1,06kg</p>";
        isContentVisible = true;
    }}
function carmouse() {
    const contentElement = document.getElementById("cmou");
    if (isContentVisible) {
        contentElement.innerHTML = "";
        isContentVisible = false;
      } else {
        contentElement.innerHTML = "<p>·Resolución: 16.000 DPI</p><p>·Velocidad máxima: 400 IPS</p><p>·Aceleración máxima: 40 G</p><p>·Conexiones: USB 2.0 (Tipo C-A)</p><p>·Batería: 500m Ah</p>";
        isContentVisible = true;
    }}
