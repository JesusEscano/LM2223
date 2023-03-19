
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
document.getElementById("rou").innerHTML =   "<div class='text'><p>Capacidad: 2 TB</p><p>2.0Ghz quad-core 64-bit CPU</p><p>Dual 2.5G WAN/LAN port</p><p>ASUS AiMesh compatible</p></div>";
}
function carkey() {
document.getElementById("keyb").innerHTML = "<p>Antifantasma: Si</p><p>Longitud de cable: 1,5 m</p><p>Alimentación: USB</p><p>Color del producto: Negro Monocromo</p><p>Material: Acrilonitrilo butadieno estireno (ABS)</p><p>Tipo de retroiluminación: LED RGB</p><p>Dimensiones de teclado (Ancho x Profundidad x Altura): 292 x 102 x 37 mm</p><p>Peso del teclado: 400 g</p><p>Formato del teclado: Mini</p><p>Idioma del teclado: Español</p><p>Interruptor del teclado: Interruptor mecánico</p><p>Teclado numérico: No</p><p>Tecnología de switch del teclado: Outemu Red</p>";
}
function carmouse() {
document.getElementById("mous").innerHTML = "<p>Capacidad de batería: 500 mAh</p><p>Fuente de energía: Baterías</p><p>Recargable: Si</p><p>Tecnología de batería: Litio</p><p>Tipo de puerto de carga: MicroUSB tipo B</p><p>Color del producto: Plata Monocromo</p><p>Factor de forma: Ambidextro</p><p>Mangos de goma: Si</p><p>Material: ABS sintéticos</p><p>Conectar y usar (Plug and Play): Si</p><p>Cantidad de botones: 4</p><p>Interfaz del dispositivo: RF Wireless+Bluetooth+USB Type-A</p><p>Resistencia de los botones (millones de clics): 5</p><p>Resolución de movimiento: 1600 DPI</p>";
}
