document.querySelector('input[name="txtnombre"]').addEventListener("keypress",
function(event){
    var ascii=event.keyCode || event.wich;
    if((ascii >= 48 && ascii <= 57) || ascii==46){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="txtapellido"]').addEventListener("keypress",
function(event){
    var ascii=event.keyCode || event.wich;
    if((ascii >= 48 && ascii <= 57) || ascii==46){
        window.event.preventDefault();
        return;
    }
});

function registrar(frm){
    vacio=/^$/;
    if(vacio.test(frm.txtapellido.value)){
        window.event.preventDefault();
        alert("Ingrese sus apellidos"); return;
    }
    if(vacio.test(frm.txtnombre.value)){
        window.event.preventDefault();
        alert("Ingrese su nombres"); return;
    }
    if(vacio.test(frm.txtCorreo.value)){
        window.event.preventDefault();
        alert("Ingrese su correo"); return;
    }
    patron = /^[-\w.%+]{1,}@(?:[A-Z0-9-]{1,}\.){1,125}[A-Z]{2,}$/i;
    if(!patron.test(frm.txtCorreo.value)){
        window.event.preventDefault();
        alert("Error: Formato del correo no es válido");
        return;
    }
    if(vacio.test(frm.txtFechaActual.value)){
        window.event.preventDefault();
        alert("Ingrese la fecha actual"); return;
    }
    if(vacio.test(frm.txtopinion.value)){
        window.event.preventDefault();
        alert("Ingrese su opinión"); return;
    }
};