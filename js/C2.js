
function coro(sw){
    var pic;
    if (sw == 10){
        pic = "../Imágenes/Imágenes/ps5 des.jpeg"}
        else if (sw == 20){
            pic = "../Imágenes/Imágenes/ps5 2.jpeg"
        }
        else if(sw == 30){
            pic = "../Imágenes/Imágenes/ps5 1.jpeg"
        }
        else if(sw == 40){
            pic = "../Imágenes/Imágenes/ps5 3.jpg"
        }
        else{
            pic = "../Imágenes/Imágenes/ps5 4.webp"
        }
        document.getElementById('foco').src = pic;
    }
    document.body.setAttribute("coro(sw)")