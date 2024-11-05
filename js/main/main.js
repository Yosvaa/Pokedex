import { pokemons } from '../pokemon.js';
import { pagina1 } from './pagina1.js';

let MAX_HP = 0;
let MAX_ATAQUE = 0;
let MAX_DEFENSA = 0;
let MAX_ATAQUE_ESPECIAL = 0;
let MAX_DEFENSA_ESPECIAL = 0;
let MAX_VELOCIDAD = 0;

export function main(id){
    let pokemon;

    // ENCONTRAR POKEMON
    pokemons.forEach(objetoPokemon => {
        if (objetoPokemon['id'] == id){
            pokemon = objetoPokemon;
        }
    });

    obtenerEstadisticasMaximas();
    // MAIN
    let main = document.getElementsByTagName('main')[0];
    main.setAttribute("style", "border: 0.1em solid tomato; font-family: 'Press Start 2P', sans-serif; display: flex; justify-content: space-between; width: 37em;");
    
    // AÑADIR FUENTE
    let link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    main.appendChild(link);

    // DIV IZQUIERDA
    let divIzq = document.createElement('div');
    divIzq.setAttribute("style", 
        "margin: 0.5em; display: flex; flex-direction: column; align-items: center; width: 17em; min-width: 17em; max-width: 17em; border: 0.1em solid tomato; width: 100%;"
    );

    // DIV DERECHA
    let divDch = document.createElement('div');
    divDch.setAttribute("style", 
        "margin: 0.5em; display: flex; flex-direction: column; align-items: center; width: 17em; min-width: 17em; max-width: 17em; border: 0.1em solid tomato; width: 100%;"
    );

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
    img.setAttribute("style","height: 8em; margin-top: 1em;");
    divIzq.appendChild(img);

    // TIPOS
    let table = document.createElement('table');
    table.setAttribute("style", "margin: 0.5em;");
    let tr = document.createElement('tr');
    pokemon['tipos'].forEach(tipo => {
        let td = document.createElement('td');
        img = document.createElement('img');
        img.src = "./img/Tipo/" + tipo + ".png";
        img.setAttribute("style","height: 1em;");
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
        tdNameStat.setAttribute("style", "width: 8em; text-align: right;");

        // AÑADIR BARRA
        let tdBarra = document.createElement('td');
        tdBarra.setAttribute("style", "border: 0.1em solid black; width: 7em;");
        let barra = document.createElement('div');

        switch (estadistica) {
            case "hp":
                tdNameStat.textContent = "hp";
                barra.setAttribute("style", "width: " + ((numStat / MAX_HP) * 100) + "%; height: 1em; background-color: black;");
                break;
            case "ataque":
                tdNameStat.textContent = "atq";
                barra.setAttribute("style", "width: " + ((numStat / MAX_ATAQUE) * 100) + "%; height: 1em; background-color: black;");
                break;
            case "defensa":
                tdNameStat.textContent = "def";
                barra.setAttribute("style", "width: " + ((numStat / MAX_DEFENSA) * 100) + "%; height: 1em; background-color: black;");
                break;
            case "ataque_especial":
                tdNameStat.textContent = "atq_sp";
                barra.setAttribute("style", "width: " + ((numStat / MAX_ATAQUE_ESPECIAL) * 100) + "%; height: 1em; background-color: black;");
                break;
            case "defensa_especial":
                tdNameStat.textContent = "def_sp";
                barra.setAttribute("style", "width: " + ((numStat / MAX_DEFENSA_ESPECIAL) * 100) + "%; height: 1em; background-color: black;");
                break;
            case "velocidad":
                tdNameStat.textContent = "vel";
                barra.setAttribute("style", "width: " + ((numStat / MAX_VELOCIDAD) * 100) + "%; height: 1em; background-color: black;");
                break;
        }
        tr.appendChild(tdNameStat);

        tdBarra.appendChild(barra);
        tr.appendChild(tdBarra);

        // AÑADIR NUMEROS
        let tdNumStat = document.createElement('td');
        tdNumStat.textContent = numStat;
        tr.appendChild(tdNumStat);

        table.appendChild(tr);
    }

    divIzq.appendChild(table);

    main.appendChild(divIzq);
    let pagina = pagina1(id);
    divDch.appendChild(pagina);
    main.appendChild(divDch);
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