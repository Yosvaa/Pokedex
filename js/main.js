import { pokemons } from './pokemon.js';

export function main(id){
    let pokemon;

    // ENCONTRAR POKEMON
    pokemons.forEach(objetoPokemon => {
        if (objetoPokemon['id'] == id){
            pokemon = objetoPokemon;
        }
    });
    
    // MAIN
    let main = document.getElementsByTagName('main')[0];
    main.setAttribute("style", "border: 0.1em solid tomato; font-family: Arial, sans-serif; display: flex; justify-content: center; width: 35em;");

    // DIV IZQUIERDA
    let divIzq = document.createElement('div');
    divIzq.setAttribute("style", 
        "padding: 1em; margin: 1em; display: flex; flex-direction: column; align-items: center; width: 13em; min-width: 13em; max-width: 13em; border: 0.1em solid tomato; width: 100%;"
    );

    // DIV DERECHA
    let divDch = document.createElement('div');
    divDch.setAttribute("style", 
        "padding: 1em; margin: 1em; display: flex; flex-direction: column; align-items: center; width: 13em; min-width: 13em; max-width: 13em; border: 0.1em solid tomato; width: 100%;"
    );

    //  DIV NOMBRE+ID
    let divNameId = document.createElement('div');
    divNameId.setAttribute("style", 
        "display: flex; justify-content: space-between; align-items: center; width: 100%; margin: 0; padding: 0em;"
    );

    // NOMBRE
    let h2 = document.createElement('h2');
    h2.textContent = pokemon['nombre'];
    divNameId.appendChild(h2);

    // ID
    h2 = document.createElement('h2');
    h2.textContent = "Nº " + pokemon['id'];
    h2.setAttribute("style","font-size: 1em;");
    divNameId.appendChild(h2);

    divIzq.appendChild(divNameId);

    // IMAGEN POKEMON
    let img = document.createElement('img');
    img.src = "./img/Pokemon/" + pokemon['id'] + ".png";
    img.setAttribute("style","height: 8em; margin: 1em;");
    divIzq.appendChild(img);

    // TIPOS
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    pokemon['tipos'].forEach(tipo => {
        let td = document.createElement('td');
        img = document.createElement('img');
        img.src = "./img/Tipo/" + tipo + ".png";
        img.setAttribute("style","height: 1em; margin-top: 1em;");
        td.appendChild(img);
        tr.appendChild(td);
    });
    table.appendChild(tr);
    divIzq.appendChild(table);

    // ESTADISTICAS
    table = document.createElement('table');
    for (let estadistica in pokemon['estadisticas_base']) {
        tr = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = estadistica + ": " + pokemon['estadisticas_base'][estadistica];
        tr.appendChild(td);
        table.appendChild(tr);
    }
    table.setAttribute("style", "display: flex; flex-direction: column; align-items: flex-start;")

    divIzq.appendChild(table);

    

    main.appendChild(divIzq);
    main.appendChild(divDch);
}