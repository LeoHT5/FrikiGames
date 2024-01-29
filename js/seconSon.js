
    function coro(sw){
        var pic;
        if (sw == 10){
            pic = "../Imágenes/Imágenes de juegos/contSS.webp"}
            else if (sw == 20){
                pic = "../Imágenes/Imágenes de juegos/contSS2.webp"
            }
            else if(sw == 30){
                pic = "../Imágenes/Imágenes de juegos/contSS3.webp"
            }
            else if(sw == 40){
                pic = "../Imágenes/Imágenes de juegos/contSS4.webp"
            }
            else{
                pic = "../Imágenes/Imágenes de juegos/contSS5.webp"
            }
            document.getElementById('foco').src = pic;
        }
        function prender(sw){
            var pic;
            if (sw == 0){
                pic = "https://www.youtube.com/embed/m0vXm-ZyjE8"}
                else if(sw == 1){
                    pic = "https://www.youtube.com/embed/y1WZQOD9hVg"
                }
                else{
                    pic = "https://www.youtube.com/embed/Au1azGOxdpg"
                }
                
                document.getElementById('juego').src = pic;
            }
document.body.setAttribute("prender(sw);coro(sw)")