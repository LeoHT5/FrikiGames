function coro(sw){
    var pic;
    if (sw == 100){
        pic = "../Imágenes/Imágenes/contg1.jpg"}
        else if (sw == 200){
            pic = "../Imágenes/Imágenes/contg2.jpg"
        }
        else if(sw == 300){
            pic = "../Imágenes/Imágenes/contg3.jpg"
        }
        else if(sw == 400){
            pic = "../Imágenes/Imágenes/contg4.jpg"
        }
        else{
            pic = "../Imágenes/Imágenes/contg5.jpg"
        }
        document.getElementById('foco').src = pic;
    }
    function co(sf){
        var pic;
        if (sf == 10){
            pic = "../Imágenes/Imágenes/contGOWps4.webp"}
            else if (sf == 20){
                pic = "../Imágenes/Imágenes/contGOWps42.webp"
            }
            else if(sf == 30){
                pic = "../Imágenes/Imágenes/contGOWps43.webp"
            }
            else if(sf == 40){
                pic = "../Imágenes/Imágenes/contGOWps44.webp"
            }
            else{
                pic = "../Imágenes/Imágenes/contGOWps45.webp"
            }
            document.getElementById('efe').src = pic;
        }
    function prender(sw){
        var pic;
        if (sw == 0){
            pic = "https://www.youtube.com/embed/gOE2BVRCUkM"}
            else if(sw == 1){
                pic = "https://www.youtube.com/embed/xaywNYhfwvg"
            }
            else if(sw == 2){
                pic = "https://www.youtube.com/embed/bPi7ORsTp-I"
            }
            else{
                pic = "https://www.youtube.com/embed/6F4GB-9pSB0"
            }
            
            document.getElementById('juego').src = pic;
        }
        
document.body.setAttribute("prender(sw);cor(sf);coro(sw)")