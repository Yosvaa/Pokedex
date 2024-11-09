// CREAR TABLE
let table = document.createElement('table');
table.id = "table";
table.setAttribute("style", `
    margin: 0.2em;
    padding-left: 0.5em; 
    padding-right: 0.5em;
    padding-top: 0;
    padding-bottom:0;
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 0.3em solid #111;
    border-radius: 3%;
`);

export function pagina03(pokemon, color){
    // ESTADISTICAS PARA LA PAGINA
    let estadisticas = ["fuerza_contra", "debil_contra", "inmune_contra", "resistente_a"];

    for (let estadistica in pokemon) {
        
        if (estadisticas.includes(estadistica)){
            
            let tr = document.createElement('tr');
            tr.setAttribute("style", " display: flex; flex-direction: column; align-items: center; width: 100%");

            // AÑADIR NOMBRE DE ESTADÍSTICA
            let tdNameStat = document.createElement('td');
            tdNameStat.setAttribute("style", `
                width: 80%;
                border: 0.2em solid;
                border-radius: 0.5em;
                padding: 0.5em;
                margin: 0.3em;
                background-color: ${color};
                display: flex;
                justify-content: center;
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
            table.appendChild(tr);
        }
    }
    return table;
}