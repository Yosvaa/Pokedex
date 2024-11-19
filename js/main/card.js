import { arrayPokemons } from '../pokemon.js';

let MAX_HP = 0;
let MAX_ATAQUE = 0;
let MAX_DEFENSA = 0;
let MAX_ATAQUE_ESPECIAL = 0;
let MAX_DEFENSA_ESPECIAL = 0;
let MAX_VELOCIDAD = 0;

export function card(pokemon, color){
    obtenerEstadisticasMaximas();

    // DIV CARD
    let divCard = document.createElement('div');
    divCard.setAttribute("style", `
        padding: 1em; 
        display: flex; 
        flex-direction: column; 
        align-items: center;
        justify-content: space-between;
        width: 16em; 
        min-width: 16em; 
        max-width: 16em; 
        border: 0.2em solid ${color};
        border-radius: 1em;
        width: 100%;
        background-image: url('../img/iconos/card.png'), radial-gradient(circle at center 33%, white 5%, ${color} 45%);
        background-size: cover;
        background-position: center;
        border-right: none;
    `);

    //  DIV NOMBRE+ID
    let divNameId = document.createElement('div');
    divNameId.setAttribute("style", 
        "display: flex; justify-content: space-between; align-items: center; width: 100%; margin: 0; padding: 0em;"
    );

    // NOMBRE
    let nombre = document.createElement('p');
    nombre.textContent = pokemon['nombre'];
    nombre.setAttribute("style","font-weight: bold; margin: 0; padding: 0em;");
    divNameId.appendChild(nombre);

    // ID
    let n = document.createElement('p');
    n.textContent = "Nº" + pokemon['id'].toString().padStart(3, '0');
    n.setAttribute("style","font-weight: bold; font-size: 0.8em; margin: 0; padding: 0em;");
    divNameId.appendChild(n);

    divCard.appendChild(divNameId);

    // IMAGEN POKEMON
    let img = document.createElement('img');
    if(pokemon['id']>151){
        img.src = "../img/iconos/nuevo.png";
    } else{
        img.src = "../img/Pokemon/" + pokemon['id'] + ".png";
    }
    img.setAttribute("style","height: 9em; margin-top: 1em;");
    divCard.appendChild(img);

    // TIPOS
    let table = document.createElement('table');
    table.setAttribute("style", "margin: 0.5em;");

    let tr = document.createElement('tr');

    pokemon['tipos'].forEach(tipo => {
        let td = document.createElement('td');
        img = document.createElement('img');
        img.src = "../img/Tipo/" + tipo + ".png";
        img.setAttribute("style","height: 1.1em; border: 0.1em solid #111; border-radius: 0.7em;");
        td.appendChild(img);
        tr.appendChild(td);
    });
    table.appendChild(tr);
    divCard.appendChild(table);

    // ESTADISTICAS
    table = document.createElement('table');
    table.setAttribute("style", "font-size: 0.7em; display: flex; flex-direction: column; justify-content: space-between; width: 100%;")

    for (let estadistica in pokemon['estadisticas_base']) {
        tr = document.createElement('tr');
        tr.setAttribute("style", "");

        // AÑADIR NOMBRE DE ESTADÍSTICA
        let tdNameStat = document.createElement('td');
        tdNameStat.setAttribute("style", "width: 6.8em; text-align: right;");

        // AÑADIR BARRA
        let tdBarra = document.createElement('td');
        tdBarra.setAttribute("style", ` border: 0.2em solid black; width: 8em; border-radius: 0.3em; background-color: white`);
        let barra = document.createElement('div');
        
        let numStat = pokemon['estadisticas_base'][estadistica];

        switch (estadistica) {
            case "hp":
                tdNameStat.textContent = "hp";
                barra.setAttribute("style", "width: " + ((numStat / MAX_HP) * 100) + "%; height: 1.1em; background-color: black; border-radius: 0.3em;");
                break;
            case "ataque":
                tdNameStat.textContent = "atq";
                barra.setAttribute("style", "width: " + ((numStat / MAX_ATAQUE) * 100) + "%; height: 1.1em; background-color: black; border-radius: 0.3em;");
                break;
            case "defensa":
                tdNameStat.textContent = "def";
                barra.setAttribute("style", "width: " + ((numStat / MAX_DEFENSA) * 100) + "%; height: 1.1em; background-color: black; border-radius: 0.3em;");
                break;
            case "ataque_especial":
                tdNameStat.textContent = "atq_sp";
                barra.setAttribute("style", "width: " + ((numStat / MAX_ATAQUE_ESPECIAL) * 100) + "%; height: 1.1em; background-color: black; border-radius: 0.3em;");
                break;
            case "defensa_especial":
                tdNameStat.textContent = "def_sp";
                barra.setAttribute("style", "width: " + ((numStat / MAX_DEFENSA_ESPECIAL) * 100) + "%; height: 1.1em; background-color: black; border-radius: 0.3em;");
                break;
            case "velocidad":
                tdNameStat.textContent = "vel";
                barra.setAttribute("style", "width: " + ((numStat / MAX_VELOCIDAD) * 100) + "%; height: 1.1em; background-color: black; border-radius: 0.3em;");
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
    divCard.appendChild(table);

    return divCard;
}

function obtenerEstadisticasMaximas() {
    let max_hp = 0;
    let max_ataque = 0;
    let max_defensa = 0;
    let max_ataque_especial = 0;
    let max_defensa_especial = 0;
    let max_velocidad = 0;

    arrayPokemons().forEach(pokemon => {
        if (pokemon.estadisticas_base){
           let stat = pokemon.estadisticas_base;

            if (stat.hp > max_hp) max_hp = stat.hp;
            if (stat.ataque > max_ataque) max_ataque = stat.ataque;
            if (stat.defensa > max_defensa) max_defensa = stat.defensa;
            if (stat.ataque_especial > max_ataque_especial) max_ataque_especial = stat.ataque_especial;
            if (stat.defensa_especial > max_defensa_especial) max_defensa_especial = stat.defensa_especial;
            if (stat.velocidad > max_velocidad) max_velocidad = stat.velocidad; 
        }
        
    });

    MAX_HP = max_hp;
    MAX_ATAQUE = max_ataque;
    MAX_DEFENSA = max_defensa;
    MAX_ATAQUE_ESPECIAL = max_ataque_especial;
    MAX_DEFENSA_ESPECIAL = max_defensa_especial;
    MAX_VELOCIDAD = max_velocidad;
}