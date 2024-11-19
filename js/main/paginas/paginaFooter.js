import { pagina01 } from './pagina01.js';
import { pagina02 } from './pagina02.js';
import { pagina03 } from './pagina03.js';
import { arrayPokemons } from '/js/pokemon.js';
import { main } from '../main.js';
import { aside } from '../../aside/aside.js';


let pokemon;
let color;
let idPagina;

// CREAR BOTONES
function crearBoton(onclick, url) {
    let boton = document.createElement("button");
    boton.onclick = onclick;
    boton.style = `
        width: 2em;
        height: 2em;
        background-size: contain;
        background-repeat: no-repeat;
        background-color: unset;
        border: none;
        background-image: url('${url}');
    `;
    return boton;
}

let botonIzq = crearBoton(cambiarIzq, '../img/iconos/flechaIzquierda.png');
let botonDch = crearBoton(cambiarDch, '../img/iconos/flechaDerecha.png');

// TABLE CIRCULOS
    let tableCirculos = document.createElement("table");
    tableCirculos.style = `
        display: flex;
        align-items: center;
    `;

// DIV FOOTER
let divFooter = document.createElement("div");
divFooter.setAttribute("style", `
    margin: 0;
    padding: 1.5em;
    padding-top: 0em; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 2.4em;
`)

export function paginaFooter(idPaginaAux, pokemonAux, colorAux){
    idPagina = idPaginaAux;
    pokemon = pokemonAux;
    color = colorAux;

    while (tableCirculos.firstChild) {
        tableCirculos.removeChild(tableCirculos.firstChild);
    }

    for (let i = 1; i <= 3; i++) {
        let trCirculo = document.createElement("tr");
        trCirculo.setAttribute("style", `
            margin: 0.2em;
            width: 1.2em;
            height: 1.2em;
            background-color: white;
            border-radius: 0.65em;
            border: 0.25em solid #111; 
        `);
        if (idPagina == i){
            trCirculo.style.backgroundColor = "#111";
        }
        tableCirculos.appendChild(trCirculo);
    }

    if (idPagina == 1){
        botonIzq.style.backgroundImage = "url('../img/iconos/papelera.png')";
        botonIzq.style.cursor = 'pointer';

        botonDch.style.backgroundImage = "url('../img/iconos/flechaDerecha.png')";
        botonDch.style.cursor = 'pointer';
    } 
    
    else if (idPagina == 2){
        botonIzq.style.backgroundImage = "url('../img/iconos/flechaIzquierda.png')";
        botonIzq.style.cursor = 'pointer';

        botonDch.style.backgroundImage = "url('../img/iconos/flechaDerecha.png')";
        botonDch.style.cursor = 'pointer';
    }

    else if (idPagina == 3){
        botonIzq.style.backgroundImage = "url('../img/iconos/flechaIzquierda.png')";
        botonIzq.style.cursor = 'pointer';

        botonDch.style.backgroundImage = "url('../img/iconos/flechaVacia.png')";
        botonDch.style.cursor = 'auto';
    }
    
    // MONTAR
    divFooter.appendChild(botonIzq);
    divFooter.appendChild(tableCirculos);
    divFooter.appendChild(botonDch);

    return divFooter;
}

export function cambiarIzq(){
    let pagina = document.getElementById("pagina");
    let table = document.getElementById("table");

    // BORRAR CON LA PAPELERA
    if (idPagina == 1) {
        let pokemonsArray = arrayPokemons();
        // LO BORRA
        let actualID = pokemon['id'];
        pokemonsArray = pokemonsArray.filter(objetoPokemon => objetoPokemon.id !== pokemon.id);
        localStorage.setItem("pokemons", JSON.stringify(pokemonsArray));

        aside();
        let idsDisponibles = pokemonsArray.map(p => p.id).sort((a, b) => a - b);
        let siguienteID = idsDisponibles.find(id => id > actualID) || idsDisponibles[0];
        location.href = `../index.html?id=${siguienteID}`;
        if (idsDisponibles.length === 0) {
            alert("No hay más Pokémon disponibles.");
            location.href = "../agregar.html"; // Página agregar si queda vacio
        }

    } 

    if (idPagina == 2) {
        table.innerHTML = "";
        pagina.innerHTML = "";

        pagina.appendChild(pagina01(pokemon, color));
        pagina.appendChild(paginaFooter(1, pokemon, color));
    } 
    
    else if (idPagina == 3) {
        table.innerHTML = "";
        pagina.innerHTML = "";

        pagina.appendChild(pagina02(pokemon, color));
        pagina.appendChild(paginaFooter(2, pokemon, color));
    }

}

export function cambiarDch(){
    let pagina = document.getElementById("pagina");
    let table = document.getElementById("table");

    if (idPagina == 1) {
        table.innerHTML = "";
        pagina.innerHTML = "";

        pagina.appendChild(pagina02(pokemon, color));
        pagina.appendChild(paginaFooter(2, pokemon, color));
    } 
    
    else if (idPagina == 2) {
        table.innerHTML = "";
        pagina.innerHTML = "";

        pagina.appendChild(pagina03(pokemon, color));
        pagina.appendChild(paginaFooter(3, pokemon, color));
    }
}
