import { arrayPokemons } from '/js/pokemon.js';
import { pokemons } from '/js/pokemon.js';
import { main } from '../main/main.js';
import { colorPokemon } from '../main/main.js';
import { app } from '../app.js';


export function aside(arrayPokemonsAside){
    let aside = document.getElementsByTagName('aside')[0];
    // BORRAR SU CONTENIDO SI TIENE
    while (aside.firstChild) {
        aside.removeChild(aside.firstChild);
    }

    aside.id = "aside";
    aside.setAttribute("style", `
        font-family: 'Press Start 2P', sans-serif; 
        font-size: 16px;
        display: flex;
        flex-direction: column; 
        width: 16.5em;
        height: 29em;
        margin-top: 130px;
        margin-left: 0.5em;
    `);

    let scrollContainer = document.createElement('scroll-container');
        scrollContainer.setAttribute("style", `
            margin: 0.1em;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            overflow: auto;
        `);
    
    // BUSCA EN EL ARRAY DE POKEMONS
    if (!arrayPokemonsAside){
        arrayPokemonsAside = arrayPokemons();
    }
    arrayPokemonsAside.forEach(pokemon => {
        let color = colorPokemon(pokemon);

        // DIV POKEMON
        let divPokemon = document.createElement('scroll-page');
        divPokemon.setAttribute("style", `
            margin: 0.1em;
            padding-left: 0.5em;
            display: flex; 
            align-items: center;
            gap: 0.5em;
            border-radius: 0.7em;
            cursor: pointer;
            background-image: url('./img/iconos/card.png'), radial-gradient(circle at right, white, ${color});
            background-size: cover;
            background-position: center;
        `);

        divPokemon.onclick = function () {
            main(pokemon['id']);
        }

        // ID
        let n = document.createElement('p');
        n.textContent = "Nº" + pokemon['id'].toString().padStart(3, '0');
        n.setAttribute("style","font-size: 0.7em;");
        divPokemon.appendChild(n);

        // IMAGEN POKEMON
        let img = document.createElement('img');
        img.src = "./img/Pokemon/" + pokemon['id'] + ".png";
        img.setAttribute("style","height: 1.6em;");
        divPokemon.appendChild(img);

        // NOMBRE
        let nombre = document.createElement('p');
        nombre.textContent = pokemon['nombre'];
        nombre.setAttribute("style","font-size: 0.7em;");
        divPokemon.appendChild(nombre);
        
        scrollContainer.appendChild(divPokemon);
    });

    aside.appendChild(scrollContainer);

    let agregarPokemon = document.createElement("a");
    agregarPokemon.style = `
        padding: 1em;
        margin-top: 1em;
        cursor: pointer;
        font-size: 11px;
        text-align: center;
        border: 0.3em solid #ddd;
        border-radius: 1em;
        text-decoration: none;
        color: inherit;
        background-color: white;
    `;
    agregarPokemon.textContent = "Agregar Pokémon";
    agregarPokemon.href = "../../pages/agregar.html";

    aside.appendChild(agregarPokemon);

    let restaurarPokemons = document.createElement("a");
    restaurarPokemons.style = `
        padding: 1em;
        margin-top: 1em;
        cursor: pointer;
        font-size: 11px;
        text-align: center;
        border: 0.3em solid #ddd;
        border-radius: 1em;
        text-decoration: none;
        color: inherit;
        background-color: white;
    `;
    restaurarPokemons.textContent = "Restaurar Pokémons";
    restaurarPokemons.onclick = function () {
        localStorage.setItem("pokemons", JSON.stringify(pokemons));
        app();
    }

    aside.appendChild(restaurarPokemons);
}