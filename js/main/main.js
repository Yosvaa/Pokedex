import { pokemons } from '../pokemon.js';
import { paginas } from './paginas.js';

let MAX_HP = 0;
let MAX_ATAQUE = 0;
let MAX_DEFENSA = 0;
let MAX_ATAQUE_ESPECIAL = 0;
let MAX_DEFENSA_ESPECIAL = 0;
let MAX_VELOCIDAD = 0;
obtenerEstadisticasMaximas();

let color;

export function main(id){
    let pokemon;
    
    // ENCONTRAR POKEMON
    pokemons.forEach(objetoPokemon => {
        if (objetoPokemon['id'] == id){
            pokemon = objetoPokemon;
        }
    });
    
    colorPokemon(pokemon);

    // MAIN
    let main = document.getElementsByTagName('main')[0];
    main.setAttribute("style", 
        `font-family: 'Press Start 2P', sans-serif; 
        display: flex; 
        width: 40em;
        height: 32em;
    `);
    
    // AÑADIR FUENTE
    let link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    main.appendChild(link);

    // DIV IZQUIERDA
    let divIzq = document.createElement('div');
    divIzq.setAttribute("style", `
        margin: 0.15em;
        font-size: 1.2em;
        padding: 0.7em; 
        display: flex; 
        flex-direction: column; 
        align-items: center;
        justify-content: space-between;
        width: 16em; 
        min-width: 16em; 
        max-width: 16em; 
        border: 0.2em solid #111;
        border-radius: 3%;
        width: 100%;

        background-image: url('./img/iconos/card.png'), radial-gradient(circle at center 33%, white 10%, ${color} 75%);
        background-size: cover;
        background-position: center;
    `);

    //  DIV NOMBRE+ID
    let divNameId = document.createElement('div');
    divNameId.setAttribute("style", 
        "display: flex; justify-content: space-between; align-items: center; width: 100%; margin: 0; padding: 0em;"
    );

    // NOMBRE
    let h2 = document.createElement('h2');
    h2.textContent = pokemon['nombre'];
    h2.setAttribute("style","font-size: 1em; margin: 0; padding: 0em;");
    divNameId.appendChild(h2);

    // ID
    h2 = document.createElement('h2');
    h2.textContent = "Nº" + pokemon['id'].toString().padStart(3, '0');
    h2.setAttribute("style","font-size: 0.8em; margin: 0; padding: 0em;");
    divNameId.appendChild(h2);

    divIzq.appendChild(divNameId);

    // IMAGEN POKEMON
    let img = document.createElement('img');
    img.src = "./img/Pokemon/" + pokemon['id'] + ".png";
    img.setAttribute("style","height: 7em; margin-top: 1em;");
    divIzq.appendChild(img);

    // TIPOS
    let table = document.createElement('table');
    table.setAttribute("style", "margin: 0.5em;");
    let tr = document.createElement('tr');
    pokemon['tipos'].forEach(tipo => {
        let td = document.createElement('td');
        img = document.createElement('img');
        img.src = "./img/Tipo/" + tipo + ".png";
        img.setAttribute("style","height: 1em; border: 0.1em solid #111; border-radius: 0.7em;");
        td.appendChild(img);
        tr.appendChild(td);
    });
    table.appendChild(tr);
    divIzq.appendChild(table);

    // ESTADISTICAS
    table = document.createElement('table');
    table.setAttribute("style", "font-size: 0.7em; display: flex; flex-direction: column; justify-content: space-between; width: 100%;")

    for (let estadistica in pokemon['estadisticas_base']) {
        let numStat = pokemon['estadisticas_base'][estadistica];

        tr = document.createElement('tr');
        tr.setAttribute("style", "margin-top: 0.05em;");

        // AÑADIR NOMBRE DE ESTADÍSTICA
        let tdNameStat = document.createElement('td');
        tdNameStat.setAttribute("style", "width: 6.7em; text-align: right;");

        // AÑADIR BARRA
        let tdBarra = document.createElement('td');
        tdBarra.setAttribute("style", `margin-left: 7em; border: 0.15em solid black; width: 9em; border-radius: 0.3em; background-color: white`);
        let barra = document.createElement('div');

        switch (estadistica) {
            case "hp":
                tdNameStat.textContent = "hp";
                barra.setAttribute("style", "width: " + ((numStat / MAX_HP) * 100) + "%; height: 1.2em; background-color: black; border-radius: 0.3em;");
                break;
            case "ataque":
                tdNameStat.textContent = "atq";
                barra.setAttribute("style", "width: " + ((numStat / MAX_ATAQUE) * 100) + "%; height: 1.2em; background-color: black; border-radius: 0.3em;");
                break;
            case "defensa":
                tdNameStat.textContent = "def";
                barra.setAttribute("style", "width: " + ((numStat / MAX_DEFENSA) * 100) + "%; height: 1.2em; background-color: black; border-radius: 0.3em;");
                break;
            case "ataque_especial":
                tdNameStat.textContent = "atq_sp";
                barra.setAttribute("style", "width: " + ((numStat / MAX_ATAQUE_ESPECIAL) * 100) + "%; height: 1.2em; background-color: black; border-radius: 0.3em;");
                break;
            case "defensa_especial":
                tdNameStat.textContent = "def_sp";
                barra.setAttribute("style", "width: " + ((numStat / MAX_DEFENSA_ESPECIAL) * 100) + "%; height: 1.2em; background-color: black; border-radius: 0.3em;");
                break;
            case "velocidad":
                tdNameStat.textContent = "vel";
                barra.setAttribute("style", "width: " + ((numStat / MAX_VELOCIDAD) * 100) + "%; height: 1.2em; background-color: black; border-radius: 0.3em;");
                break;
        }
        tr.appendChild(tdNameStat);

        tdBarra.appendChild(barra);
        tr.appendChild(tdBarra);

        // AÑADIR NUMEROS
        let tdStatContent = document.createElement('td');
        tdStatContent.textContent = numStat;
        tr.appendChild(tdStatContent);  
        
        table.appendChild(tr);
    }

    divIzq.appendChild(table);

    main.appendChild(divIzq);

    main.appendChild(paginas(id));
}

function obtenerEstadisticasMaximas() {
    let max_hp = 0;
    let max_ataque = 0;
    let max_defensa = 0;
    let max_ataque_especial = 0;
    let max_defensa_especial = 0;
    let max_velocidad = 0;

    pokemons.forEach(pokemon => {
        let stat = pokemon.estadisticas_base;

        if (stat.hp > max_hp) max_hp = stat.hp;
        if (stat.ataque > max_ataque) max_ataque = stat.ataque;
        if (stat.defensa > max_defensa) max_defensa = stat.defensa;
        if (stat.ataque_especial > max_ataque_especial) max_ataque_especial = stat.ataque_especial;
        if (stat.defensa_especial > max_defensa_especial) max_defensa_especial = stat.defensa_especial;
        if (stat.velocidad > max_velocidad) max_velocidad = stat.velocidad;
    });

    MAX_HP = max_hp;
    MAX_ATAQUE = max_ataque;
    MAX_DEFENSA = max_defensa;
    MAX_ATAQUE_ESPECIAL = max_ataque_especial;
    MAX_DEFENSA_ESPECIAL = max_defensa_especial;
    MAX_VELOCIDAD = max_velocidad;
}

function colorPokemon(pokemon) {
    let tipo = pokemon['tipos'][0];
    switch (tipo) {
        case "Fuego":
            color = "#f48c94";
            break;
        case "Hada":
            color = "#f5c6e7";
            break;
        case "Eléctrico":
            color = "#f9e79f";
            break;
        case "Tierra":
            color = "#ac7850";
            break;
        case "Veneno":
            color = "#d7bde2";
            break;
        case "Planta":
            color = "#9ccc8c";
            break;
        case "Bicho":
            color = "#c4cc8c";
            break;
        case "Lucha":
            color = "#fcbc78";
            break;
        case "Psíquico":
            color = "#f49cbc";
            break;
        case "Agua":
            color = "#89bcf4";
            break;
        case "Dragón":
            color = "#8c96e9";
            break;
        case "Roca":
            color = "#c8c3a8";
            break;
        case "Hielo":
            color = "#afeffc";
            break;
        case "Fantasma":
            color = "#9f809f";
            break;
        case "Acero":
            color = "#7fb3c4";
            break;
        case "Siniestro":
            color = "#845484";
            break;
        default:
            color = "#ccc";
            break;
    }
}