import { pokemons } from '../pokemon.js';

export function paginas(id){
    encontrarPokemon(id);
    colorPokemon(pokemon);
    pagina.appendChild(tablePagina1());
    pagina.appendChild(boton);
    return pagina;
}

let pokemon;
let color;

// CREAR PÁGINA
let pagina = document.createElement("div");
pagina.setAttribute("style", 
    `margin: 0.5em; 
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 0.1em solid tomato; 
`);

// CREAR TABLE
let table = document.createElement('table');
table.setAttribute("style", 
    `font-size: 0.7em; 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`);

// CREAR BOTÓN
let boton = document.createElement("button");
boton.setAttribute("style", `
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
            tr.setAttribute("style", "margin-top: 0.5em; display: flex; flex-direction: row;");

            // AÑADIR NOMBRE DE ESTADÍSTICA
            let tdNameStat = document.createElement('td');
            tdNameStat.setAttribute("style", 
                `border: 0.1em solid;
                border-radius: 0.5em;
                padding: 0.5em;
                width: 55%;
                background-color: ${color};
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-right: 0.5em;`);

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
            tr.setAttribute("style", "margin-top: 0.5em; display: flex; flex-direction: row;");

            // AÑADIR NOMBRE DE ESTADÍSTICA
            let tdNameStat = document.createElement('td');
            tdNameStat.setAttribute("style", 
                `border: 0.1em solid;
                border-radius: 0.5em;
                padding: 0.5em;
                width: 60%;
                background-color: ${color};
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-right: 0.5em;`);

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
                    img.setAttribute("style","height: 1.4em; margin: 0.1em;");

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
        boton.id = "boton2";
        pagina.appendChild(boton);
    } 
    
    else if (boton.id == "boton2") {
        table.innerHTML = "";
        pagina.appendChild(tablePagina1());
        boton.id = "boton1";
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
    color = pokemon['color'];
    switch (color) {
        case "Rojo":
            color = "#f1948a";
            break;
        case "Blanco":
            color = "#f8f9f9";
            break;
        case "Rosa":
            color = "#f5c6e7";
            break;
        case "Amarillo":
            color = "#f9e79f";
            break;
        case "Marrón":
            color = "#d7bfbf";
            break;
        case "Púrpura":
            color = "#d7bde2";
            break;
        case "Verde":
            color = "#abebc6";
            break;
        case "Naranja":
            color = "#f8c471";
            break;
        case "Morado":
            color = "#d2b4de";
            break;
        case "Azul":
            color = "#aed6f1";
            break;
        default:
            color = "#e5e8e8";
            break;
    }
}