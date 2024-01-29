
    function coro(sw){
        var pic;
        if (sw == 10){
            pic = "../Imágenes/Imágenes de juegos/img2.jpg"}
            else if (sw == 20){
                pic = "../Imágenes/Imágenes de juegos/img3.jpg"
            }
            else if(sw == 30){
                pic = "../Imágenes/Imágenes de juegos/img4.jpg"
            }
            else if(sw == 40){
                pic = "../Imágenes/Imágenes de juegos/img5.jpg"
            }
            else{
                pic = "../Imágenes/Imágenes de juegos/img6.jpg"
            }
            document.getElementById('foco').src = pic;
        }
        function prender(sw){
            var pic;
            if (sw == 0){
                pic = "https://www.youtube.com/embed/Mry8BgkOrlc"}
                else if(sw == 1){
                    pic = "https://www.youtube.com/embed/oIrQdh9WiCQ"
                }
                else{
                    pic = "https://www.youtube.com/embed/9-2fkH5T374"
                }
                
                document.getElementById('juego').src = pic;
            }
document.body.setAttribute("prender(sw);coro(sw)")
    