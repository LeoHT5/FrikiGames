
    function coro(sw){
        var pic;
        if (sw == 10){
            pic = "../Imágenes/Imágenes/cont1R3.jpg" }
            else if (sw == 20){
                pic = "../Imágenes/Imágenes/cont2R3.jpg"
            }
            else if(sw == 30){
                pic = "../Imágenes/Imágenes/cont3R3.jpg"
            }
            else if(sw == 40){
                pic ="../Imágenes/Imágenes/cont4R3.jpg"
            }
            else{
                pic = "../Imágenes/Imágenes/cont5R3.jpg"
            }
            document.getElementById('foco').src = pic;
        }
        function prender(sw){
            var pic;
            if (sw == 0){
                pic = "https://www.youtube.com/embed/32LSdT0dqxc"}
                else if(sw == 1){
                    pic = "https://www.youtube.com/embed/Wghn3tYYVNw"
                }
                else{
                    pic = "https://www.youtube.com/embed/UrPIgrykNR0"
                }
                
                document.getElementById('juego').src = pic;
            }
document.body.setAttribute("prender(sw);coro(sw)")