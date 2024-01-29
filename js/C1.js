
function coro(sw){
    var pic;
    if (sw == 10){
        pic = "../Imágenes/Imágenes/1imagen{.jpeg"}
        else if (sw == 20){
            pic = "../Imágenes/Imágenes/2imagen.jpeg"
        }
        else if(sw == 30){
            pic = "../Imágenes/Imágenes/3imagen.jpeg"
        }
        else if(sw == 40){
            pic = "../Imágenes/Imágenes/4imagen.jpeg"
        }
        else{
            pic = "../Imágenes/Imágenes/5imagen.jpeg"
        }
        document.getElementById('foco').src = pic;
    }
    document.body.setAttribute("coro(sw)")