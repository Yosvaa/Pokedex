import { pokemons } from '../pokemon.js';

let pokemon;
let color;

export function paginas(id){
    encontrarPokemon(id);
    colorPokemon(pokemon);
    pagina.appendChild(tablePagina1());
    pagina.appendChild(boton);
    return pagina;
}

// CREAR PÁGINA
let pagina = document.createElement("div");
pagina.setAttribute("style", `
    margin: 0.2em;
    padding: 0.7em; 
    display: flex;
    flex-direction: column;
    width: 30em;
    border: 0.25em solid #111;
    border-radius: 3%;
`);

// CREAR TABLE
let table = document.createElement('table');
table.setAttribute("style", `
    font-size: 0.7em; 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`);

// CREAR BOTÓN
let boton = document.createElement("button");
boton.setAttribute("style", `
    margin-top: 1em;
    width: 2em;
    height: 2em;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: unset;
    border: none;
    cursor: pointer;
`);
boton.onclick = cambiarPag;

function tablePagina1(){
    let estadisticas = ["peso", "altura", "amistad_base", "color", "género", "habitat", "es_legendario", "es_mitico"];
    let estadisticasBoolean = ["es_legendario", "es_mitico"];

    for (let estadistica in pokemon) {
        // ESTADISTICAS PARA LA PAGINA
        if (estadisticas.includes(estadistica)){
            
            let tr = document.createElement('tr');
            tr.setAttribute("style", "margin: 1em; display: flex; flex-direction: row;");

            // AÑADIR NOMBRE DE ESTADÍSTICA
            let tdNameStat = document.createElement('td');
            tdNameStat.setAttribute("style", `
                border: 0.2em solid;
                border-radius: 0.5em;
                padding: 0.75em;
                width: 55%;
                background-color: ${color};
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-right: 0.5em;
                background-image: url('./img/iconos/card.png'), radial-gradient(circle at right 33%, white 10%, ${color} 75%);
            `);

            let numStat = pokemon[estadistica];

            switch (estadistica) {
                case "peso":
                    tdNameStat.textContent = "Peso";
                    break;
                case "altura":
                    tdNameStat.textContent = "Altura";
                    break;
                case "amistad_base":
                    tdNameStat.textContent = "Amistad";
                    break;
                case "color":
                    tdNameStat.textContent = "Color";
                    break;
                case "género":
                    tdNameStat.textContent = "Género";
                    break;
                case "habitat":
                    tdNameStat.textContent = "Habitat";
                    
                    break;
                case "es_legendario":
                    if (pokemon[estadistica]){
                        tdNameStat.textContent = "Legendario";
                        tr.appendChild(tdNameStat);
                    }
                    break;
                case "es_mitico":
                    if (pokemon[estadistica]){
                        tdNameStat.textContent = "Mítico";
                        tr.appendChild(tdNameStat);
                    }
                    break;
            }
            // AÑADIR CONTENIDO
            if (!estadisticasBoolean.includes(estadistica)){
                tr.appendChild(tdNameStat);

                let tdStatContent = document.createElement('td');
                tdStatContent.setAttribute("style", 
                    `display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    width: 45%;
                `)

                if (estadistica == "peso") tdStatContent.textContent = numStat + "kg";
                else if (estadistica == "altura") tdStatContent.textContent = numStat + "m";
                else tdStatContent.textContent = numStat;

                tr.appendChild(tdStatContent);
                table.appendChild(tr);
            }
        }
        table.id = "table1";
    }
    boton.id = "boton1";
    boton.style.backgroundImage = "url('../img/iconos/flechaDerecha.png')";
    boton.style.marginLeft = "16em";

    return table;
}

function tablePagina2(){
    let estadisticas = ["fuerza_contra", "debil_contra", "inmune_contra", "resistente_a"];

    for (let estadistica in pokemon) {
        // ESTADISTICAS PARA LA PAGINA
        if (estadisticas.includes(estadistica)){
            
            let tr = document.createElement('tr');
            tr.setAttribute("style", "margin-top: 0.8em; display: flex; flex-direction: row;");

            // AÑADIR NOMBRE DE ESTADÍSTICA
            let tdNameStat = document.createElement('td');
            tdNameStat.setAttribute("style", 
                `border: 0.2em solid;
                border-radius: 0.5em;
                padding: 0.5em;
                width: 65%;
                background-color: ${color};
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-right: 0.5em;
                background-image: url('./img/iconos/card.png'), radial-gradient(circle at right 33%, white 10%, ${color} 75%);
                background-size: cover;
                background-position: center;
            `);

            switch (estadistica) {
                case "fuerza_contra":
                    if (pokemon[estadistica].length != 0){
                        tdNameStat.textContent = "Fuerza";
                        tr.appendChild(tdNameStat);
                    }
                    break;
                case "debil_contra":
                    if (pokemon[estadistica].length != 0){
                        tdNameStat.textContent = "Debilidades";
                        tr.appendChild(tdNameStat);
                    }
                    break;
                case "inmune_contra":
                    if (pokemon[estadistica].length != 0){
                        tdNameStat.textContent = "Inmunidad";
                        tr.appendChild(tdNameStat);
                    }
                    break;
                case "resistente_a":
                    if (pokemon[estadistica].length != 0){
                        tdNameStat.textContent = "Resistencia";
                        tr.appendChild(tdNameStat);
                    }
                    break;
            }
            // AÑADIR CONTENIDO
            if (pokemon[estadistica].length != 0) {
                let tdTipo = document.createElement("td");
                tdTipo.setAttribute("style", "width: 40%;")

                pokemon[estadistica].forEach(tipo => {
                    let img = document.createElement('img');
                    img.src = "./img/Tipo/" + tipo + ".png";
                    img.setAttribute("style","height: 1.5em; border: 0.1em solid #111; border-radius: 1em; margin: 0.2em;");

                    tdTipo.appendChild(img);
                });
                tr.appendChild(tdTipo);
                table.appendChild(tr);
            }
        }
        table.id = "table2";
    }
    boton.id = "boton2";
    boton.style.backgroundImage = "url('../img/iconos/flechaIzquierda.png')";
    boton.style.marginLeft = "0";

    return table;
}

function cambiarPag(){

    if (boton.id == "boton1") {
        table.innerHTML = "";
        pagina.appendChild(tablePagina2());
        pagina.appendChild(boton);
    } 
    
    else if (boton.id == "boton2") {
        table.innerHTML = "";
        pagina.appendChild(tablePagina1());
        pagina.appendChild(boton);
    }
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
