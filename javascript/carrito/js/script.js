
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
function carmon() {
document.getElementById("cmon").innerHTML = "<p>6000 Mbps ultrafast WiFi</p><p>Memoria RAM: 8 GB DDR4 3200 MHz (4GB integradas + 4GB SO-DIMM); Ampliable hasta 12 GB (1x SO-DIMM)</p><p>Almacenamiento: 512 GB SSD M.2 2242 PCIe 3.0x4 NVMe</p><p>Unidad óptica: No</p><p>Display: 15.6' FHD (1920x1080) TN, 250 nits, Antirreflectante, 45% NTSC</p><p>Controlador gráfico Integrado: Intel UHD Graphics</p><p>Conectividad:</p><li>Ethernet 100/1000M</li><li>WiFi 802.11ac (2x2) + Bluetooth 5.0</li><p>Webcam: HD 720p con tapa de privacidad</p><p>Micrófono: Sí</p><p>Audio 2 altavoces estéreo de 1.5 W, Dolby Audio</p><p>Batería Integrada: 38 Wh</p><p>Conexiones:</p><li>1 x USB 3.2 Gen 1</li><li>1 x USB-C 3.2 Gen 1 (solo admite transferencia de datos)</li><li>1 x USB 2.0</li><li>1 x HDMI 1.4b</li><li>1 x Combo auriculares/micrófono jack (3.5 mm)</li><li>1 x Ethernet (RJ-45)</li><p>Firmware: TPM 2.0</p><p>Ranura de seguridad: Kensington Nano</p><p>Sistema operativo: Windows 10 Home 64 bits</p><p>Dimensiones (Ancho x Profundidad x Altura): 359,2 x 235,8 x 19,9 mm</p><p>Peso: 1,7 kg</p><p>Color: Negro</p></td>";
}
function carou() {
document.getElementById("rou").innerHTML =   "<div class='text'><p>Capacidad: 2 TB</p><p>2.0Ghz quad-core 64-bit CPU</p><p>Dual 2.5G WAN/LAN port</p><p>ASUS AiMesh compatible</p></div>";
}
function carkey() {
document.getElementById("keyb").innerHTML = "<p>Antifantasma: Si</p><p>Longitud de cable: 1,5 m</p><p>Alimentación: USB</p><p>Color del producto: Negro Monocromo</p><p>Material: Acrilonitrilo butadieno estireno (ABS)</p><p>Tipo de retroiluminación: LED RGB</p><p>Dimensiones de teclado (Ancho x Profundidad x Altura): 292 x 102 x 37 mm</p><p>Peso del teclado: 400 g</p><p>Formato del teclado: Mini</p><p>Idioma del teclado: Español</p><p>Interruptor del teclado: Interruptor mecánico</p><p>Teclado numérico: No</p><p>Tecnología de switch del teclado: Outemu Red</p>";
}
function carmouse() {
document.getElementById("mous").innerHTML = "<p>Capacidad de batería: 500 mAh</p><p>Fuente de energía: Baterías</p><p>Recargable: Si</p><p>Tecnología de batería: Litio</p><p>Tipo de puerto de carga: MicroUSB tipo B</p><p>Color del producto: Plata Monocromo</p><p>Factor de forma: Ambidextro</p><p>Mangos de goma: Si</p><p>Material: ABS sintéticos</p><p>Conectar y usar (Plug and Play): Si</p><p>Cantidad de botones: 4</p><p>Interfaz del dispositivo: RF Wireless+Bluetooth+USB Type-A</p><p>Resistencia de los botones (millones de clics): 5</p><p>Resolución de movimiento: 1600 DPI</p>";
}
