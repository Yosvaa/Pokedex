import { pokemons } from "../pokemon.js";
export function header() {
    barraBusqueda();
}

const estilos = document.createElement("style");
estilos.textContent = `

header {
    width:100%;
    background-color: white;
    margin-bottom:5px;
    position: absolute;
}
.inputBusqueda{
    width: 28px;
    height: 25px;

    visibility: hidden 4s;
    -webkit-appearance: none;
    display: flex;
    justify-self: end;
    margin-right: 31px;
    margin-top: 20px;

    border-radius: 100px;
    outline: none;
    border: 3px solid rgb(111, 215, 215);
    padding: 5px;

    
    }
    .inputBusqueda.activo {
    animation: example ease forwards;
    animation-duration: 3s;
    animation-delay: 0s;
    }

    @keyframes example {
        0% {
            width: 28px;
            visibility: visible;
        }
        100% {
            width: 150px;
            visibility: visible;
        }

    }

    .fotoLupa {
        position: absolute;
        width : 25px;
        height: 25px;
        position: absolute;
        right: 0;
        margin-right: 48.5px;
        margin-top: 6px;

    }
    .fotoLupa.encima{
        Cursor : pointer;
    }

    .ulEstilo{
        list-style-type:none;
        margin-top:30px;
        margin-right:9.3em; 
        display: block;
        justify-self: end;
        margin-right: 100px;
        margin-top: 20px;
    }
`;
document.head.appendChild(estilos);

function barraBusqueda() {

    let header = document.getElementsByTagName('header')[0];
    
    let img = document.createElement('img');
    img.setAttribute("src", "/img/iconos/lupa.png");
    img.setAttribute("class","fotoLupa");
    header.appendChild(img);
    
    let input = document.createElement('input');
    input.setAttribute("id", "busqueda");
    input.type = "text";
    input.setAttribute("class", "inputBusqueda");
    header.appendChild(input);

    let ul = document.createElement('ul');
    ul.setAttribute("class","ulEstilo");

    header.appendChild(ul);
    /**
     * Con esta funcion creamos la forma en la que vamos a mostrar los resultados 
     * en este caso es en forma de lista.
     * @param {object} resultado 
     */

    function mostrarResultados(resultado) {
        ul.innerHTML = ""; //limpia los resultados anteriores
        resultado.forEach(i => {
            let li = document.createElement('li');
            li.textContent = i['nombre'];
            ul.appendChild(li);
        });
    }

    input.addEventListener('input', () => {
        let valor = input.value.toLowerCase();// las letras que van metiendo
        //comprobamos si se incluyen en nuestro array de pokemons, y lo que nos
        // devuelva es el valor que mostraremos (las ocincidencias); 
        let resultado = pokemons.filter(i => i['nombre'].toLowerCase().includes(valor));
        //le pasamos el objeto con coincidencias para que lo muestre;
        mostrarResultados(resultado);

    });

    img.addEventListener("mouseover",()=>{
        img.classList.toggle("encima");
    });

    img.addEventListener("click",()=>{
        input.classList.toggle("activo");
    });

}


