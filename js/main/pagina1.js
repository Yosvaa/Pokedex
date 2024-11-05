import { pokemons } from '../pokemon.js';

let MAX_PESO = 0;
let MAX_ALTURA = 0;
let MAX_AMISTAD_BASE = 0;

export function pagina1(id){
    
    // ENCONTRAR POKEMON
    let pokemon;
    pokemons.forEach(objetoPokemon => {
        if (objetoPokemon['id'] == id){
            pokemon = objetoPokemon;
        }
    });

    obtenerEstadisticasMaximas();

    let pagina = document.createElement("div");
    let table = document.createElement('table');
    table.setAttribute("style", "font-size: 0.7em; display: flex; flex-direction: column; justify-content: space-between; width: 100%;")

    let estadisticas = ["peso", "altura", "amistad_base", "color", "género", "habitat", "es_legendario", "es_mitico"]
    let estadisticasNumber = ["peso", "altura", "amistad_base"];
    let estadisticasString = ["color", "habitat"];
    let estadisticasObject = ["género"];
    let estadisticasBoolean = ["es_legendario", "es_mitico"];

    for (let estadistica in pokemon) {
        // TODAS LAS ESTADISTICAS
        if (estadisticas.includes(estadistica)){

            let tr = document.createElement('tr');
            tr.setAttribute("style", "margin-top: 0.05em;");

            // AÑADIR NOMBRE DE ESTADÍSTICA
            let tdNameStat = document.createElement('td');
            tdNameStat.setAttribute("style", "width: 8em; text-align: right;");

            let numStat = pokemon[estadistica];
            let tdBarra = document.createElement('td');
            let barra = document.createElement('div');

            switch (estadistica) {
                case "peso":
                    tdNameStat.textContent = "Peso";

                    tdBarra.setAttribute("style", "border: 0.1em solid black; width: 7em;");
                    barra.setAttribute("style", "width: " + ((numStat / MAX_PESO) * 100) + "%; height: 1em; background-color: black;");
                    break;
                case "altura":
                    tdNameStat.textContent = "Altura";

                    tdBarra.setAttribute("style", "border: 0.1em solid black; width: 7em;");
                    barra.setAttribute("style", "width: " + ((numStat / MAX_ALTURA) * 100) + "%; height: 1em; background-color: black;");
                    break;
                case "amistad_base":
                    tdNameStat.textContent = "Amistad";

                    tdBarra.setAttribute("style", "border: 0.1em solid black; width: 7em;");
                    barra.setAttribute("style", "width: " + ((numStat / MAX_AMISTAD_BASE) * 100) + "%; height: 1em; background-color: black;");
                    break;
                case "color":
                    tdNameStat.textContent = "Color:";
                    break;
                case "género":
                    tdNameStat.textContent = "Género:";
                    break;
                case "habitat":
                    tdNameStat.textContent = "Habitat:";
                    
                    break;
                case "es_legendario":
                    if (pokemon[estadistica]){
                        tdNameStat.textContent = "Legendario";
                    }
                    break;
                case "es_mitico":
                    if (pokemon[estadistica]){
                        tdNameStat.textContent = "Mítico";
                    }
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
            pagina.appendChild(table);
        }
        }

        
    return pagina;
}

function obtenerEstadisticasMaximas() {
    let peso_max = 0;
    let altura_max = 0;
    let amistad_base_max = 0;

    pokemons.forEach(pokemon => {
        if (pokemon.peso > peso_max) peso_max = pokemon.peso;
        if (pokemon.altura > altura_max) altura_max = pokemon.altura;
        if (pokemon.amistad_base > amistad_base_max) amistad_base_max = pokemon.amistad_base;
    });

    MAX_PESO = peso_max;
    MAX_ALTURA = altura_max;
    MAX_AMISTAD_BASE = amistad_base_max;
}