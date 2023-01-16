function redondo(params) {
    document.getElementById(params).style.backgroundColor="transparent";

}

function recupera(id,color) {
    document.getElementById(id).style.backgroundColor=color;
}

function cambia(id,color) {
    if (document.getElementById(id).style.backgroundColor=="transparent"){
        document.getElementById(id).style.backgroundColor=color;
    }
    else{
        document.getElementById(id).style.backgroundColor="transparent";
    }
}