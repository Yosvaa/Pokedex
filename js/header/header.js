export function header() {
    titulo();
}

const estilos = document.createElement("style");
estilos.textContent = `

header {
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width:100%;
    background-color: white;
    margin:5px;
    padding:10px;
    height:100px;
    position: absolute;
    
}
    
    .titulo{
        marging:5px;
        height: 80px;
        position: absolute;
        
    }   
    
`;
document.head.appendChild(estilos);

function titulo() {

    let header = document.getElementsByTagName('header')[0];
    let titulo=document.createElement('img');

    titulo.setAttribute("src","/img/iconos/tituloHeader.png");
    titulo.setAttribute("class","titulo");

    header.appendChild(titulo);
     

}