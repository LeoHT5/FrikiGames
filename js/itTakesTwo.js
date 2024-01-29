
    function coro(sw){
        var pic;
        if (sw == 10){
            pic = "../Imágenes/Imágenes/contitt.jpg"}
            else if (sw == 20){
                pic = "../Imágenes/Imágenes/contitt2.webp"
            }
            else if(sw == 30){
                pic = "../Imágenes/Imágenes/contitt3.jpg"
            }
            else if(sw == 40){
                pic = "../Imágenes/Imágenes/contitt4.jpg"
            }
            else{
                pic = "../Imágenes/Imágenes/contitt5.jpg"
            }
            document.getElementById('foco').src = pic;
        }
        function prender(sw){
            var pic;
            if (sw == 0){
                pic = "https://www.youtube.com/embed/t_YK7uUziYE"}
                else if(sw == 1){
                    pic = "https://cdn.cloudflare.steamstatic.com/steam/apps/256813190/movie480_vp9.webm?t=1607655633"
                }
                else{
                    pic = "https://cdn.cloudflare.steamstatic.com/steam/apps/256813189/movie480_vp9.webm?t=1607655625"
                }
                
                document.getElementById('juego').src = pic;
            }
document.body.setAttribute("prender(sw);coro(sw)")