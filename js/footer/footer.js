
export function footer() {
    let body = document.getElementsByTagName('body')[0];
    const estilos = document.createElement("style");

    estilos.textContent =`
    .pantalla {
           
            border:2px solid white;
            color:white;
            bottom:20px;
            right:40px;
            position:absolute;
            padding:10px;
            height:fit-content;
            width:150px;
            border-radius:10px;
        }`;
        document.body.appendChild(estilos);

        let div = document.createElement('h4');
        div.setAttribute("class","pantalla");
        div.textContent=`Ancho total:${screen.width} px \n Alto total: ${screen.height} px`;
        document.body.appendChild(div);

        window.addEventListener("resize",()=>{
            if(window.innerWidth < screen.width){
                div.style.visibility="hidden";
            }else{
                div.style.visibility="visible";
            }
        });
        
}