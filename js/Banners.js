var c=1;

function carrusel(){
    document.querySelector("#banner").style.opacity="0";
    document.querySelector("#banner").style.transition="all 1s";

    setTimeout("cambio()",1000);
}
function cambio(){
    c++;
    if(c>8){c=0;}
    document.querySelector("#banner").setAttribute("src","../Imágenes/Banners/Ban"+c+".jpg");

    document.querySelector("#banner").style.opacity="1";
    document.querySelector("#banner").style.transition="all 1s";

    setTimeout("carrusel()",2000);
}

document.body.setAttribute("onload","carrusel()");