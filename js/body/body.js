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
        
        .peluche {
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

    document.body.appendChild(estilos);
    let img = document.createElement('img');
    img.setAttribute("src","/img/iconos/peluche.gif");
    img.setAttribute("class","peluche");
    
    let img2=document.createElement('img');
    img2.setAttribute("src","/img/iconos/pajaro.gif");
    img2.setAttribute("class","pajaro");
    document.body.appendChild(estilos);
    body.appendChild(img);
    body.appendChild(img2);

    window.addEventListener("resize",()=>{
        if(window.innerWidth < screen.width){
            img.style.visibility="hidden";
        }else{
            img.style.visibility="visible";
        }
    });

    window.addEventListener("resize",()=>{
        if(window.innerWidth < screen.width ){
            img2.style.visibility="hidden";
        }else{
            img2.style.visibility="visible";
        }
    })
    
    

}