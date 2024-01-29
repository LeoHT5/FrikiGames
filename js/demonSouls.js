function coro(sw){
    var pic;
    if (sw == 10){
        pic = "../Imágenes/Imágenes/contds.webp"}
        else if (sw == 20){
            pic = "../Imágenes/Imágenes/contds2.webp"
        }
        else if(sw == 30){
            pic = "../Imágenes/Imágenes/contds3.webp"
        }
        else if(sw == 40){
            pic = "../Imágenes/Imágenes/contds4.webp"
        }
        else{
            pic = "../Imágenes/Imágenes/contds5.webp"
        }
        document.getElementById('foco').src = pic;
    }
    function prender(sw){
        var pic;
        if (sw == 0){
            pic = "https://www.youtube.com/embed/C7NqSTQvRBw"}
            else if(sw == 1){
                pic = "https://www.youtube.com/embed/qjZIw0VUezU"
            }
            else{
                pic = "https://www.youtube.com/embed/2TMs2E6cms4"
            }
            
            document.getElementById('juego').src = pic;
        }
document.body.setAttribute("prender(sw);coro(sw)")