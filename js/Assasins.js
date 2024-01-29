
    function coro(sw){
        var pic;
        if (sw == 10){
            pic = "../Imágenes/Imágenes de juegos/contA(1).jpg"}
            else if (sw == 20){
                pic = "../Imágenes/Imágenes de juegos/contB.webp"
            }
            else if(sw == 30){
                pic = "../Imágenes/Imágenes de juegos/conC.webp"
            }
            else if(sw == 40){
                pic = "../Imágenes/Imágenes de juegos/contD.webp"
            }
            else{
                pic = "../Imágenes/Imágenes de juegos/cont6(1).webp"
            }
            document.getElementById('foco').src = pic;
        }
        function prender(sw){
            var pic;
            if (sw == 0){
                pic = "https://www.youtube.com/embed/k2xN31Avh6U"}
                else if(sw == 1){
                    pic = "https://www.youtube.com/embed/hRwFj-yh8qY"
                }
                else{
                    pic = "https://www.youtube.com/embed/gnmuEkn30ZE"
                }
                
                document.getElementById('juego').src = pic;
            }
document.body.setAttribute("prender(sw);coro(sw)")