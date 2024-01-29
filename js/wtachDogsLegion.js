function coro(sw){
    var pic;
    if (sw == 10){
        pic = "../Imágenes/Imágenes de juegos/contwdl.webp"}
        else if (sw == 20){
            pic = "../Imágenes/Imágenes de juegos/contwdl2.webp"
        }
        else if(sw == 30){
            pic = "../Imágenes/Imágenes de juegos/contwdl3.webp"
        }
        else if(sw == 40){
            pic = "../Imágenes/Imágenes de juegos/contwdl4.webp"
        }
        else{
            pic = "../Imágenes/Imágenes de juegos/contwdl5.webp"
        }
        document.getElementById('foco').src = pic;
    }
    function prender(sw){
        var pic;
        if (sw == 0){
            pic = "https://www.youtube.com/embed/tEGjiu-J0mc"}
            else if(sw == 1){
                pic = "https://www.youtube.com/embed/G1SlKPo-HBg"
            }
            else{
                pic = "https://www.youtube.com/embed/ayqP0FE7SQ0"
            }
            
            document.getElementById('juego').src = pic;
        }
document.body.setAttribute("prender(sw);coro(sw)")