
    function coro(sw){
        var pic;
        if (sw == 10){
            pic = "../Imágenes/Imágenes de juegos/contaCA(2).jpg"}
            else if (sw == 20){
                pic = "../Imágenes/Imágenes de juegos/contCA2.jpeg"
            }
            else if(sw == 30){
                pic = "../Imágenes/Imágenes de juegos/contCA3.jpg"
            }
            else if(sw == 40){
                pic = "../Imágenes/Imágenes de juegos/contCA(3).jpg"
            }
            else{
                pic = "../Imágenes/Imágenes de juegos/contCA5.png"
            }
            document.getElementById('foco').src = pic;
        }
        function prender(sw){
            var pic;
            if (sw == 0){
                pic = "https://www.youtube.com/embed/I2fTPJhbF80"}
                else if(sw == 1){
                    pic = "https://www.youtube.com/embed/rUWFZUGQ0b4"
                }
                else{
                    pic = "https://www.youtube.com/embed/3dWCHB-PFdQ"
                }
                
                document.getElementById('juego').src = pic;
            }
document.body.setAttribute("prender(sw);coro(sw)")