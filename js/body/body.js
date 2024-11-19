export function body(){
    let body = document.getElementsByTagName('body')[0];
    const estilos = document.createElement("style");

    estilos.textContent =`
    body{
        display: flex;
        justify-content: center;
        background-color:#2a1e3e;
    }
        .pantalla {
        background-color:white;
        border:2px solid black;
        bottom:30px;
        right:50px;
        position:absolute;
        height:80px;
        }
    `;

    document.body.appendChild(estilos);
    let div = document.createElement('div');
    div.setAttribute("class","pantalla");
    div.textContent=`
    Dimensiones de la pantalla:
    Ancho total:${screen.width} px
    Alto total: ${screen.height} px`;
    document.body.appendChild(div);
}