import { aside } from "../aside/aside.js";
import { arrayPokemons } from "../pokemon.js";

let arrayPokemon = arrayPokemons();
const estilos = document.createElement("style");
estilos.textContent = `
    nav {
        margin-top:100px;
        width:52em;
        height:40px;
        padding: 3px;
        margin-top: 130px;
        font-family: 'Press Start 2P', sans-serif; 
        
        border-radius: 5px;
        position: absolute;
        display:flex;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

     ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }

     ::-webkit-scrollbar-thumb {
        background: #fd5959;
        border-radius: 10px; 
    }

    .scroll-container {
        visibility: hidden;

        width: 110px;
        height: 200px;
        position: absolute;
        margin-left:6px;
        margin-top:40px;

        background-color:white;
        border-radius:10px;
        overflow: scroll;
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    .scroll-container.activo{
        visibility:visible;
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
    
    .botonTipos{
        margin-top:8px;
        height:fit-content;
        width:100px;
        background-color: white;
        cursor:pointer;
        justify-content:center;
       
        border: 3px solid rgb(221, 221, 221);
        border-radius:10px; 
        box-shadow: inset 0 0 5px grey;
        font-size: 12px;
        padding:6px;
        text-align :center;
    }

`;

document.body.appendChild(estilos);

export function nav() {
    let nav = document.getElementsByTagName('nav')[0];
    while (nav.firstChild) {
        nav.removeChild(nav.firstChild);
    }
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
            filtrarTipo(tipo);
        }
        img.src = "../img/Tipo/" + tipo + ".png";
        img.setAttribute("style", "height: 1.1em; border: 0.1em solid #111; border-radius: 0.7em;");
        page.appendChild(img);
        div.appendChild(page);
    });
    nav.appendChild(div);

    /* activa el despliegue de los filtros */
    botonTipos.addEventListener("click", () => {
        div.classList.toggle("activo");
    });

    /**
     * metodo para mostrar los tipos de pokemon en el aside
     * @param {String} tipo 
     */
    function filtrarTipo(tipo) {
        let pokemonsFiltrados = arrayPokemon.filter(pokemon =>
            pokemon.tipos.includes(tipo)
        );
        aside(pokemonsFiltrados); 
    }
    

}