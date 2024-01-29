function verNoticia(NOT){
    if(NOT == 0){
        verDescripcion1();
    }
    else if(NOT == 1){
        verVistaAlJuego1();
    }
    else if(NOT == 2){
        verDescripcion2();
    }
    else if(NOT == 3){
        verVistaAlJuego2();
    }
    else if(NOT == 4){
        verDescripcion3();
    }
    else if(NOT == 5){
        verVistaAlJuego3();
    }
}

for(i=0;i<6;i++){
    document.getElementsByClassName("enlace")[i].setAttribute("onclick","verNoticia("+i+")");
}
function verDescripcion1(){
    document.getElementById("dsc1").setAttribute("src","../Imágenes/Noticias/Descripción1.png");
}
function verVistaAlJuego1(){
    document.getElementById("dsc1").setAttribute("src","../Imágenes/Noticias/Vista1.png");
}
function verDescripcion2(){
    document.getElementById("dsc2").setAttribute("src","../Imágenes/Noticias/Descripción2.png");
}
function verVistaAlJuego2(){
    document.getElementById("dsc2").setAttribute("src","../Imágenes/Noticias/Vista2.png");
}
function verDescripcion3(){
    document.getElementById("dsc3").setAttribute("src","../Imágenes/Noticias/Descripción3.png");
}
function verVistaAlJuego3(){
    document.getElementById("dsc3").setAttribute("src","../Imágenes/Noticias/Vista3.png");
}

var id = new Array("txt1","txt2","txt3","txt4","txt5","txt6");

var t1 = document.getElementById(id[0]);
var t2 = document.getElementById(id[1]);
var t3 = document.getElementById(id[2]);
var t4 = document.getElementById(id[3]);
var t5 = document.getElementById(id[4]);
var t6 = document.getElementById(id[5]);

t1.addEventListener("mouseover", cambio1);
t2.addEventListener("mouseover", cambio2);
t3.addEventListener("mouseover", cambio3);
t4.addEventListener("mouseover", cambio4);
t5.addEventListener("mouseover", cambio5);
t6.addEventListener("mouseover", cambio6);

function cambio1(){
    t1.style.color = "white";
    t1.style.fontSize = "20px";
    t1.style.backgroundColor = "blue";
}
function cambio2(){
    t2.style.color = "white";
    t2.style.fontSize = "20px";
    t2.style.backgroundColor = "blue";
}
function cambio3(){
    t3.style.color = "white";
    t3.style.fontSize = "20px";
    t3.style.backgroundColor = "blue";
}
function cambio4(){
    t4.style.color = "white";
    t4.style.fontSize = "20px";
    t4.style.backgroundColor = "blue";
}
function cambio5(){
    t5.style.color = "white";
    t5.style.fontSize = "20px";
    t5.style.backgroundColor = "blue";
}
function cambio6(){
    t6.style.color = "white";
    t6.style.fontSize = "20px";
    t6.style.backgroundColor = "blue";
}

t1.addEventListener("mouseout", original1);
t2.addEventListener("mouseout", original2);
t3.addEventListener("mouseout", original3);
t4.addEventListener("mouseout", original4);
t5.addEventListener("mouseout", original5);
t6.addEventListener("mouseout", original6);

function original1(){
    t1.style.color = "white";
    t1.style.fontSize = "15pt";
    t1.style.backgroundColor = "orange";
}
function original2(){
    t2.style.color = "white";
    t2.style.fontSize = "15pt";
    t2.style.backgroundColor = "orange";
}
function original3(){
    t3.style.color = "white";
    t3.style.fontSize = "15pt";
    t3.style.backgroundColor = "orange";
}
function original4(){
    t4.style.color = "white";
    t4.style.fontSize = "15pt";
    t4.style.backgroundColor = "orange";
}
function original5(){
    t5.style.color = "white";
    t5.style.fontSize = "15pt";
    t5.style.backgroundColor = "orange";
}
function original6(){
    t6.style.color = "white";
    t6.style.fontSize = "15pt";
    t6.style.backgroundColor = "orange";
}

var vin = new Array("a1","a2","a3");

var A1 = document.getElementById(vin[0]);
var A2 = document.getElementById(vin[1]);
var A3 = document.getElementById(vin[2]);

A1.addEventListener("mouseover",CAMBIO1);
A2.addEventListener("mouseover",CAMBIO2);
A3.addEventListener("mouseover",CAMBIO3);

function CAMBIO1(){
    A1.style.color = "white";
    A1.style.fontSize = "20px";
    A1.style.backgroundColor = "blue";
}
function CAMBIO2(){
    A2.style.color = "white";
    A2.style.fontSize = "20px";
    A2.style.backgroundColor = "blue";
}
function CAMBIO3(){
    A3.style.color = "white";
    A3.style.fontSize = "20px";
    A3.style.backgroundColor = "blue";
}

A1.addEventListener("mouseout", ORIGINAL1);
A2.addEventListener("mouseout", ORIGINAL2);
A3.addEventListener("mouseout", ORIGINAL3);

function ORIGINAL1(){
    A1.style.color = "white";
    A1.style.fontSize = "15pt";
    A1.style.backgroundColor = "orange";
}
function ORIGINAL2(){
    A2.style.color = "white";
    A2.style.fontSize = "15pt";
    A2.style.backgroundColor = "orange";
}
function ORIGINAL3(){
    A3.style.color = "white";
    A3.style.fontSize = "15pt";
    A3.style.backgroundColor = "orange";
}