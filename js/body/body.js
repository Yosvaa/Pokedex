export function body(){
    let body = document.getElementsByTagName('body')[0];
    const estilos = document.createElement("style");

    estilos.textContent =`
    body{
        display: flex;
        justify-content: center;
        background-size: cover;
        background-position: center;
        background-image: url('../img/iconos/background.jpg');

    }
        .pantalla {
           
            border:2px solid black;
            bottom:20px;
            right:40px;
            position:absolute;
            padding:10px;
            height:fit-content;
            width:150px;
            border-radius:10px;
        }
        
        .peluche{
            width:150px;
            height:150px;
            bottom:80px;
            left:80px;
            position:absolute;
        }
        .pajaro{
            width:250px;
            height:250px;
            top:20px;
            right:30px;
            position:absolute;
        }
    `;
    let img = document.createElement('img');
    img.setAttribute("src","/img/iconos/peluche.gif");
    img.setAttribute("class","peluche");
    let img2=document.createElement('img');
    img2.setAttribute("src","/img/iconos/pajaro.gif");
    img2.setAttribute("class","pajaro");
    document.body.appendChild(estilos);
    let div = document.createElement('h4');
    div.setAttribute("class","pantalla");
    div.textContent=`Ancho total:${screen.width} px \n Alto total: ${screen.height} px`;
    document.body.appendChild(div);
    body.appendChild(img);
    body.appendChild(img2);

}