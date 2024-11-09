import { pokemons } from '/js/pokemon.js';
// CREAR TABLE
let table = document.createElement('table');
table.id = "table";
table.setAttribute("style", `
    margin: 0.2em;
    padding: 0.5em; 
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    border: 0.3em solid #111;
    border-radius: 3%;
`);

export function pagina03(pokemon, color){
    // ESTADISTICAS PARA LA PAGINA
    let estadisticas = ["habilidades", "movimientos", "evoluciones"];

    for (let estadistica in pokemon) {
        
        if (estadisticas.includes(estadistica) 
            && !(estadistica == "evoluciones" 
                && pokemon[estadistica]['pre_evolucion'] == null
                && pokemon[estadistica]['evolucion_base'] == null)){
            
            let tr = document.createElement('tr');
            tr.setAttribute("style", `
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                max-width: 100%;
                max-height: 100%;
                border: 0.2em solid;
                border-radius: 0.5em;
                background-color: ${color};
                background-image: url('./img/iconos/card.png'), radial-gradient(circle at right 33%, white 10%, ${color} 75%);
                background-size: cover;
                background-position: center;
                padding: 0.5em;
                margin-left: 0.7em;
                margin-right: 0.7em;
                margin-top: 0.3em;
                margin-bottom: 0.3em;
            `);
            
            // AÑADIR NOMBRE DE ESTADÍSTICA
            let tdNameStat = document.createElement('td');
            tdNameStat.setAttribute("style", `
                display: flex;
                justify-content: center;
                margin-bottom: 0.5em;
            `);

            let tdContenido = document.createElement('td');

            switch (estadistica) {
                case "habilidades":
                    tdNameStat.textContent = "Habilidades";
                    
                    break;
                case "movimientos":
                    tdNameStat.textContent = "Movimientos";
                    
                    break;
                case "evoluciones":
                    tdNameStat.textContent = "Evoluciones";
                    

                    // IMAGENES EVOLUCIONES ANTERIORES
                    if (pokemon[estadistica]['pre_evolucion']){

                        // SI LA EVOLUCION ANTERIOR TIENE EVOLUCION ANTERIOR
                        pokemons.forEach(objetoPokemon => {
                            if (objetoPokemon['id'] == pokemon[estadistica]['pre_evolucion']['id']){
                                if (objetoPokemon[estadistica]['pre_evolucion'] != null){
                                    let divEvoluciones = crearDivEvoluciones(objetoPokemon[estadistica]['pre_evolucion']);
                                    tdContenido.appendChild(divEvoluciones);  
                                }
                            }
                        });

                        let divEvoluciones = crearDivEvoluciones(pokemon[estadistica]['pre_evolucion']);
                        tdContenido.appendChild(divEvoluciones);
                    } 

                    // IMAGEN POKEMON ACTUAL
                    // SI ES EEVEE NO SE AÑADE A SÍ MISMO
                    if (pokemon['id'] != 133){
                        let divEvoluciones = crearDivEvoluciones(pokemon);
                        tdContenido.appendChild(divEvoluciones);
                    }
                    

                    // IMAGENES EVOLUCIONES SIGUIENTES
                    if (pokemon[estadistica]['evolucion_base']){
                        if (pokemon[estadistica]['evolucion_base'].length > 1){
                            for (let evolucion in pokemon[estadistica]['evolucion_base']){
                                let divEvoluciones = crearDivEvoluciones(pokemon[estadistica]['evolucion_base'][evolucion]);
                                tdContenido.appendChild(divEvoluciones);  
                            }
                        } else {
                            let divEvoluciones = crearDivEvoluciones(pokemon[estadistica]['evolucion_base']);
                            tdContenido.appendChild(divEvoluciones);  
                        }

                        // SI LA EVOLUCION SIGUIENTE TIENE EVOLUCION SIGUIENTE
                        pokemons.forEach(objetoPokemon => {
                            if (objetoPokemon['id'] == pokemon[estadistica]['evolucion_base']['id']){
                                if (objetoPokemon[estadistica]['evolucion_base'] != null){
                                    let divEvoluciones = crearDivEvoluciones(objetoPokemon[estadistica]['evolucion_base']);
                                    tdContenido.appendChild(divEvoluciones);
                                }
                            }
                        });
                    }

                    tdContenido.setAttribute("style", "display: flex; justify-content: space-evenly; width: 100%;")
                    break;
            }
            tr.appendChild(tdNameStat);
            tr.appendChild(tdContenido);
            table.appendChild(tr);
        }
    }
    return table;
}

function crearDivEvoluciones(src){
    let divEvoluciones = document.createElement("div");
    divEvoluciones.style = `
        padding: 0.4em;
        padding-bottom: 0.1em;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    let img = document.createElement ("img");
    img.src = "./img/Pokemon/" + src['id'] + ".png";
    img.setAttribute("style","height: 5em;");

    let p = document.createElement("p");
    p.style = `
        font-size: 0.9em;
    `;
    p.textContent = "Nº" + src['id'].toString().padStart(3, '0');

    divEvoluciones.appendChild(img);
    divEvoluciones.appendChild(p);

    return divEvoluciones;
}