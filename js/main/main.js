import { pokemons } from '/js/pokemon.js';
import { paginas } from './paginas/paginaController.js';
import { card } from './card.js';

let pokemon;
let color;

export function main(id){
    encontrarPokemon(id);
    colorPokemon(pokemon);

    // MAIN
    let main = document.getElementsByTagName('main')[0];
    main.setAttribute("style", `
        font-family: 'Press Start 2P', sans-serif; 
        font-size: 16px;
        display: flex; 
        width: 38em;
        height: 27em;
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
    pokemons.forEach(objetoPokemon => {
        if (objetoPokemon['id'] == id){
            pokemon = objetoPokemon;
        }
    });
}

function colorPokemon(pokemon) {
    let tipo = pokemon['tipos'][0];
    switch (tipo) {
        case "Fuego":
            color = "rgba(236, 109, 110, 0.5)";
            break;
        case "Hada":
            color = "rgba(245, 198, 231, 0.5)";
            break;
        case "Eléctrico":
            color = "rgba(249, 231, 159, 0.5)";
            break;
        case "Tierra":
            color = "rgba(162, 108, 65, 0.5)";
            break;
        case "Veneno":
            color = "rgba(215, 189, 226, 0.5)";
            break;
        case "Planta":
            color = "rgba(156, 204, 140, 0.5)";
            break;
        case "Bicho":
            color = "rgba(196, 204, 140, 0.5)";
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
        default:
            color = "rgba(204, 204, 204, 0.5)";
            break;
    }
}
