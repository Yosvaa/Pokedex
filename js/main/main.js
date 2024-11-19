import { arrayPokemons } from '/js/pokemon.js';
import { paginas } from './paginas/paginaController.js';
import { card } from './card.js';

export function array(){
    let arrayPokemons=[]; 
    if(!localStorage.getItem("arrayPokemons")){
       arrayPokemons= localStorage.setItem("arrayPokemons",pokemons);
    }
    return arrayPokemons;
}

let pokemon;
let color;

export function main(id){
    encontrarPokemon(id);
    colorPokemon(pokemon);

    // MAIN
    let main = document.getElementsByTagName('main')[0];
    
    // BORRAR SU CONTENIDO SI TIENE
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    main.id = "main";
    main.setAttribute("style", `
        font-family: 'Press Start 2P', sans-serif; 
        font-size: 16px;
        display: flex; 
        width: 35.4em;
        height: 29em;
        margin-top: 190px;
    `);
    
    // AÑADIR FUENTE
    let link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    main.appendChild(link);

    // MONTAR CARD + PAGINA
    
    main.appendChild(card(pokemon, color));
    main.appendChild(paginas(pokemon, color));
}

function encontrarPokemon(id){
    arrayPokemons().forEach(objetoPokemon => {
        if (objetoPokemon['id'] == id){
            pokemon = objetoPokemon;
        }
    });
}

export function colorPokemon(pokemon) {
    let tipo = pokemon['tipos'][0];
    switch (tipo) {
        case "Fuego":
            color = "rgba(236, 109, 110, 0.5)";
            break;
        case "Hada":
            color = "rgba(249, 154, 229, 0.5)";
            break;
        case "Eléctrico":
            color = "rgba(255, 255, 0, 0.2)";
            break;
        case "Tierra":
            color = "rgba(162, 108, 65, 0.5)";
            break;
        case "Veneno":
            color = "rgba(200, 100, 200, 0.5)";
            break;
        case "Planta":
            color = "rgba(53, 249, 53, 0.3)";
            break;
        case "Bicho":
            color = "rgba(199, 255, 102, 0.5)";
            break;
        case "Lucha":
            color = "rgba(252, 188, 120, 0.5)";
            break;
        case "Psíquico":
            color = "rgba(244, 156, 188, 0.5)";
            break;
        case "Agua":
            color = "rgba(137, 188, 244, 0.5)";
            break;
        case "Dragón":
            color = "rgba(140, 150, 233, 0.5)";
            break;
        case "Roca":
            color = "rgba(200, 195, 168, 0.5)";
            break;
        case "Hielo":
            color = "rgba(175, 239, 252, 0.5)";
            break;
        case "Fantasma":
            color = "rgba(159, 128, 159, 0.5)";
            break;
        case "Acero":
            color = "rgba(127, 179, 196, 0.5)";
            break;
        case "Siniestro":
            color = "rgba(132, 84, 132, 0.5)";
            break;
        case "Volador":
            color = "rgba(131, 207, 234, 0.5)";
            break;
        default:
            color = "rgba(0, 0, 0, 0.2)";
            break;
    }
    return color;
}
