function coro(sw){
    var pic;
    if (sw == 10){
        pic = "../Imágenes/Imágenes de juegos/contfifa1.jpg"}
        else if (sw == 20){
            pic = "../Imágenes/Imágenes de juegos/contfifa2.jpg"
        }
        else if(sw == 30){
            pic = "../Imágenes/Imágenes de juegos/contfifa3.jpg"
        }
        else if(sw == 40){
            pic = "../Imágenes/Imágenes de juegos/contfifa4.jpg"
        }
        else{
            pic = "../Imágenes/Imágenes de juegos/contfifa5.jpg"
        }
        document.getElementById('foco').src = pic;
    }
    function prender(sw){
        var pic;
        if (sw == 0){
            pic = "https://www.youtube.com/embed/MQuf7N-Qibk"}
            else if(sw == 1){
                pic = "https://www.youtube.com/embed/h-BkmPj9TJI"
            }
            else{
                pic = "https://www.youtube.com/embed/QAN7UDWEcjs"
            }
            
            document.getElementById('juego').src = pic;
        }
document.body.setAttribute("prender(sw);coro(sw)")