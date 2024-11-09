// CREAR TABLE
let table = document.createElement('table');
table.id = "table";
table.setAttribute("style", `
    margin: 0.2em;
    padding-left: 0.5em; 
    padding-right: 0.5em;
    padding-top: 2em;
    padding-bottom: 2em;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 0.3em solid #111;
    border-radius: 3%;
`);

export function pagina01(pokemon, color){
    // ESTADISTICAS PARA LA PAGINA
    let estadisticas = ["peso", "altura", "amistad_base", "color", "género", "habitat", "es_legendario", "es_mitico"];
    let estadisticasBoolean = ["es_legendario", "es_mitico"];

    for (let estadistica in pokemon) {
        if (estadisticas.includes(estadistica)){
            
            let tr = document.createElement('tr');
            tr.setAttribute("style", "margin: 0.9em; display: flex; flex-direction: row;");

            // AÑADIR NOMBRE DE ESTADÍSTICA
            let tdNameStat = document.createElement('td');
            tdNameStat.setAttribute("style", `
                border: 0.2em solid;
                border-radius: 0.5em;
                padding: 0.75em;
                width: 45%;
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
    }
    return table;
}