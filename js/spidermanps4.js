
    function coro(sw){
        var pic;
        if (sw == 10){
            pic = "../Imágenes/Imágenes de juegos/contsp1.webp"}
            else if (sw == 20){
                pic = "../Imágenes/Imágenes de juegos/contsp2.webp"
            }
            else if(sw == 30){
                pic = "../Imágenes/Imágenes de juegos/contsp3.jpg"
            }
            else if(sw == 40){
                pic = "../Imágenes/Imágenes de juegos/contsp4.webp"
            }
            else{
                pic = "../Imágenes/Imágenes de juegos/contsp5.webp"
            }
            document.getElementById('foco').src = pic;
        }
        function prender(sw){
            var pic;
            if (sw == 0){
                pic = "https://www.youtube.com/embed/0c6EAyCpnAg"}
                else if(sw == 1){
                    pic = "https://www.youtube.com/embed/LTqczRnNqDc"
                }
                else{
                    pic = "https://www.youtube.com/embed/9ZJEPKlcqHQ"
                }
                
                document.getElementById('juego').src = pic;
            }
document.body.setAttribute("prender(sw);coro(sw)")