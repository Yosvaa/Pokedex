import { main } from '../main.js';
import { pokemons } from '/js/pokemon.js';

let pokemon;
let color;

// CREAR TABLE
let table = document.createElement('table');
table.id = "table";
table.setAttribute("style", `
    padding: 1em;
    padding-bottom: 0;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`);

// CREAR OVERLAY DE LA VENTANA EMERGENTE
let overlay = document.createElement("div");
overlay.setAttribute("style", `
    font-family: 'Press Start 2P', sans-serif;
    font-size: 11px;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
`);
document.body.appendChild(overlay);

// CREAR BOTON CERRAR DE LA VENTANA EMERGENTE
let botonCerrar = document.createElement("button");
botonCerrar.textContent = "×";
botonCerrar.onclick = function() {
    overlay.style.display = "none";
};
botonCerrar.setAttribute("style", `
    background: none;
    border: 0;
    position: absolute;
    top: 0.1em;
    right: 0.1em;
    font-size: 2em;
    color: #333;
    cursor: pointer;
`);

export function pagina03(pokemonAux, colorAux){
    pokemon = pokemonAux;
    color = colorAux;
    table.innerHTML = "";

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
                background-image: url('../img/iconos/card.png'), radial-gradient(circle at right 33%, white 5%, ${color} 45%);
                background-size: cover;
                background-position: center;
                margin-left: 0.7em;
                margin-right: 0.7em;
            `);

            switch (estadistica) {

                // HABILIDADES
                case "habilidades":
                    tr.style.marginTop = "5em";
                    // CREAR BOTON
                    let botonHabilidades = crearBoton("Habilidades »", onclickHabilidades);
                    tr.style.padding = "0";
                    tr.style.width = "70%";
                    tr.appendChild(botonHabilidades);
                    break;

                // MOVIMIENTOS
                case "movimientos":
                    tr.style.marginTop = "0.5em";
                    tr.style.marginBottom = "7em";
                    // CREAR BOTON
                    let botonMovimientos = crearBoton("Movimientos »", onclickMovimientos);
                    tr.style.padding = "0";
                    tr.style.width = "70%";
                    tr.appendChild(botonMovimientos);
                    break;

                // EVOLUCIONES
                case "evoluciones":
                    tr.style.marginTop = "0";
                    tr.style.marginBottom = "0";
                    let tdNameEvoluciones = document.createElement('td');
                    tdNameEvoluciones.setAttribute("style", `
                        display: flex;
                        justify-content: center;
                        margin: 0.5em;
                    `);

                    tdNameEvoluciones.textContent = "Evoluciones";

                    let tdContenido = document.createElement('td');
                    tdContenido.setAttribute("style", `
                        display: flex;
                        justify-content: space-evenly; 
                        width: 100%;
                        max-width: 100%;
                    `);
                    
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

                    tr.style.padding = "0.5em";
                    tr.style.width = "90%";

                    tr.appendChild(tdNameEvoluciones);
                    tr.appendChild(tdContenido);
                    break;
            }
            table.appendChild(tr);
        }
    }
    return table;
}

function crearDivEvoluciones(src){
    let divEvoluciones = document.createElement("div");
    divEvoluciones.style = `
        padding: 0.5em;
        padding-bottom: 0.1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        cursor: pointer;
    `;

    let img = document.createElement ("img");
    img.src = "../img/Pokemon/" + src['id'] + ".png";
    img.setAttribute("style","height: 4.5em;");

    let p = document.createElement("p");
    p.style = `
        font-size: 0.9em;
    `;
    p.textContent = "Nº" + src['id'].toString().padStart(3, '0');

    divEvoluciones.onclick = function () {
        main(src['id']);
    }

    divEvoluciones.appendChild(img);
    divEvoluciones.appendChild(p);

    return divEvoluciones;
}

function crearBoton(nombre, onclick){
    let button = document.createElement("button");
    // CAMBIAR EL FLEX DEL OVERLAY PARA QUE SE VEA LA VENTANA EMERGENTE
    button.onclick = onclick;
    button.textContent = nombre;
    button.style = `
        font-family: 'Press Start 2P', sans-serif;
        background: none;
        border: 0;
        font-size: 11px;
        cursor: pointer;
        width: 100%;
        height: 100%;
        padding: 1em;
    `;
    return button;
}

function crearDivEmergente(){
    let divEmergente = document.createElement("div");
    divEmergente.setAttribute("style", `
        display: flex;
        flex-direction: column;
        min-width: 22em;
        max-width: 22em;
        background-color: white;
        padding: 1.7em;
        position: relative;
        border: 0.2em solid;
        border-radius: 0.5em;
    `);
    return divEmergente;
}

function onclickHabilidades(){
    overlay.innerHTML = "";
    overlay.style.display = "flex";
    // CONTENIDO DE LA VENTANA EMERGENTE
    let contenidoHabilidades = crearDivEmergente();
    contenidoHabilidades.style.alignItems = "center";

    pokemon.habilidades.forEach(habilidad => {
        let nombreHabilidad = document.createElement("p");
        nombreHabilidad.style = `
            text-align: center;
            width: 18em;
            border: 0.2em solid;
            border-radius: 0.3em;
            background-image: url('../img/iconos/card.png'), radial-gradient(circle at right 33%, white 10%, ${color} 75%);
            background-size: cover;
            background-position: center;
            margin: 1em;
            padding: 1em;
        `;
        nombreHabilidad.textContent = habilidad.nombre;
        contenidoHabilidades.appendChild(nombreHabilidad);

        let descripcionHabilidad = document.createElement("p");
        descripcionHabilidad.style = `
            line-height: 1.5;
            text-align: center;
        `;
        
        descripcionHabilidad.textContent = `"${habilidad.descripcion}"`;
        contenidoHabilidades.appendChild(descripcionHabilidad);
    });

    contenidoHabilidades.appendChild(botonCerrar);
    overlay.appendChild(contenidoHabilidades);
}

function onclickMovimientos(){
    overlay.innerHTML = "";
    overlay.style.display = "flex";
    // CONTENIDO DE LA VENTANA EMERGENTE
    let contenidoMovimientos = crearDivEmergente();
    contenidoMovimientos.style.alignItems = "center";

    pokemon.movimientos.forEach(movimiento => {
        let nombreMovimiento = document.createElement("p");
        nombreMovimiento.style = `
            text-align: center;
            width: 18em;
            border: 0.2em solid;
            border-radius: 0.3em;
            background-image: url('./img/iconos/card.png'), radial-gradient(circle at right 33%, white 10%, ${color} 75%);
            background-size: cover;
            background-position: center;
            padding: 1em;
        `;
        nombreMovimiento.textContent = movimiento.nombre;
        contenidoMovimientos.appendChild(nombreMovimiento);

        // TIPO
        let img = document.createElement('img');
        img.src = "./img/Tipo/" + movimiento.tipo + ".png";
        img.setAttribute("style","height: 1.45em; border: 0.15em solid #111; border-radius: 1em; margin: 0.2em;");

        contenidoMovimientos.appendChild(img);

        // INFORMACION DELMOVIMIENTO
        let br = document.createElement("br");
        let info = document.createElement("p");
        info.style = `
            line-height: 2;
            text-align: left;
            margin-left: 0;
        `;
        info.innerHTML = `Potencia: ${movimiento.potencia}`;
        info.appendChild(br);
        info.innerHTML += `Precisión: ${movimiento.precision}`;
        info.appendChild(br);
        info.innerHTML += `Categoría: ${movimiento.categoria}`;
        contenidoMovimientos.appendChild(info);

    });

    contenidoMovimientos.appendChild(botonCerrar);
    overlay.appendChild(contenidoMovimientos);
}