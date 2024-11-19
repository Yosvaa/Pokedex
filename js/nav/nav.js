import { array } from "../main/main.js";
import { aside } from "../aside/aside.js";

let arrayPokemons = array();
const estilos = document.createElement("style");

estilos.textContent = `
    nav {
        
        margin-top:100px;
        width:52em;
        height:40px;
        padding: 3px;
        margin-top: 130px;
        
        font-family: 'Press Start 2P', sans-serif; 
        background-image: url('./img/iconos/card.png'), radial-gradient(circle at center 33%, white 5%, #ece6e0  45%);
        background-size: cover;
        border-radius: 5px;
        position: absolute;
        display:flex;
    }

    /*todo*/
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    /* sombra del rectangulo*/
     ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }

    /* cosita que se mueve*/
     ::-webkit-scrollbar-thumb {
        background: #fd5959;
        border-radius: 10px; 
    }

    .scroll-container {
        visibility: hidden;

        width: 110px;
        height: 200px;
        position: absolute;
        margin-left:4px;
        margin-top:31px;

        background-color:white;
        border-radius:10px;
        overflow: scroll;
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    
    .scroll-page {
        width: 110px;
        height: 25px;

        cursor: pointer;
        padding: 5px;
        justify-content: center;
        align-self: center;
        background-color:white;
    }
    
    .scroll-container.activo{
        visibility:visible;
    }


    .inputBusqueda{
        width: 28px;
        height: 25px;
        position:absolute;
        right:16px;
        visibility: hidden 4s;
        -webkit-appearance: none;
        z-index: 1;
       
        
        border-radius: 100px;
        outline: none;
        border: 3px solid #4eb9a5;
        padding: 5px;
    }

    .inputBusqueda.activo {
        animation: example ease forwards;
        animation-duration: 1s;
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
        width : 35px;
        height: 35px;
        position: absolute;
        z-index: 2;
        margin-top:2px;
        margin-left: 93%;
        transform: rotate(347deg);
        Cursor : pointer;
    }
    
    .botonTipos{
        margin-top:8px;
        height:fit-content;
        width:100px;
        background-color: #4eb9a5;
        box-shadow: 3px -3px  #3e7b7c;
       
        border: 3px solid #060708;
        border-radius:10px;
        font-size: 12px;
        padding:6px;
        text-align :center;
    }

`;

document.body.appendChild(estilos);

export function nav() {
    let nav = document.getElementsByTagName('nav')[0];
    let div = document.createElement('div');
    let botonTipos = document.createElement('div');

    botonTipos.setAttribute("name", "Tipos");
    botonTipos.setAttribute("class", "botonTipos");
    botonTipos.textContent = "Tipos";
    div.setAttribute("class", "scroll-container");
    nav.appendChild(botonTipos);

    /*Filtro de tipos */
    let arrayTipos = ["Normal", "Fuego", "Agua", "Eléctrico", "Planta", "Lucha", "Veneno", "Tierra", "Volador", "Psíquico", "Bicho", "Roca", "Fantasma", "Dragón", "Acero", "Hada", "Hielo", "Siniestro"];
    arrayTipos.forEach(tipo => {
        let page = document.createElement('div');
        page.setAttribute("class", "scroll-page");
        let img = document.createElement('img');

        img.onclick = function () {
            funcion(tipo);
        }
        img.src = "./img/Tipo/" + tipo + ".png";
        img.setAttribute("style", "height: 1.1em; border: 0.1em solid #111; border-radius: 0.7em;");
        page.appendChild(img);
        div.appendChild(page);
    });
    nav.appendChild(div);

    /*Buscador */

    let img = document.createElement('img');
    img.setAttribute("src", "/img/iconos/lupa2s.png");
    img.setAttribute("class", "fotoLupa");
    nav.appendChild(img);

    let input = document.createElement('input');
    input.setAttribute("id", "busqueda");
    input.setAttribute("class", "inputBusqueda");
    input.type = "text";
    nav.appendChild(input);

    let ul = document.createElement('ul');
    ul.setAttribute("class", "ulEstilo");

    nav.appendChild(ul);
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

    let resultado;
    input.addEventListener('input', () => {
        let valor = input.value.toLowerCase();// las letras que van metiendo
        if (valor == "") {
            ul.style.visibility = 'hidden';
        } else {
            //comprobamos si se incluyen en nuestro array de pokemons, y lo que nos
            // devuelva es el valor que mostraremos (las ocincidencias); 
            resultado = pokemons.filter(i => i['nombre'].toLowerCase().includes(valor));
            //le pasamos el objeto con coincidencias para que lo muestre;
            mostrarResultados(resultado);
        }

    });

    /*eventos */
    img.addEventListener("click", () => {
        input.classList.toggle("activo");
    });

    botonTipos.addEventListener("click", () => {
        div.classList.toggle("activo");
    });

    function filtrarTipo(tipo) {
        let pokemonsFiltrados = [];
        arrayPokemons.forEach(pokemon => {
            if (pokemon['tipos'].includes(tipo)) {
                pokemonsFiltrados.push(pokemon);
            }
        })
        aside(pokemonsFiltrados);
    }

}