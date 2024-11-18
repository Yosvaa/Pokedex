// CREAR TABLE
let table = document.createElement('table');
table.id = "table";
table.setAttribute("style", `
    padding: 2em;
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
`);

export function pagina01(pokemon, color){
    table.innerHTML = "";
    // ESTADISTICAS PARA LA PAGINA
    let estadisticas = ["peso", "altura", "amistad_base", "color", "género", "habitat", "es_legendario", "es_mitico"];
    let estadisticasBoolean = ["es_legendario", "es_mitico"];

    for (let estadistica in pokemon) {
        if (estadisticas.includes(estadistica) && (pokemon[estadistica] || estadistica == "amistad_base")){
            
            let tr = document.createElement('tr');
            tr.setAttribute("style", `
                display: flex; 
                flex-direction: row;
            `);

            // AÑADIR NOMBRE DE ESTADÍSTICA
            let tdNameStat = document.createElement('td');
            tdNameStat.setAttribute("style", `
                border: 0.2em solid #222;
                border-radius: 0.5em;
                padding: 0.75em;
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-right: 0.5em;
                background-image: url('../../img/iconos/card.png'), radial-gradient(circle at right 33%, white 10%, ${color} 75%);
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
                    tdNameStat.textContent = "Legendario";
                    tdNameStat.style.justifyContent = "center";
                    tdNameStat.style.width = "65%";
                    tr.style.justifyContent = "center";
                    break;
                case "es_mitico":
                    tdNameStat.textContent = "Mítico";
                    tdNameStat.style.justifyContent = "center";
                    tdNameStat.style.width = "65%";
                    tr.style.justifyContent = "center";
                    break;
            }

            tr.appendChild(tdNameStat);

            // AÑADIR CONTENIDO
            if (!estadisticasBoolean.includes(estadistica)) {
                let tdStatContent = document.createElement('td');
                tdStatContent.setAttribute("style", 
                    `display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    width: 50%;
                `);
            
                if (estadistica == "peso") {
                    tdStatContent.textContent = numStat + "kg";
                } 
                else if (estadistica == "altura") {
                    tdStatContent.textContent = numStat + "m";
                } 
                else if (estadistica == "género") {
                    tdStatContent.innerHTML = 
                        `♂ ${pokemon[estadistica]['macho']}%`
                        + '<br>' +
                        `♀ ${pokemon[estadistica]['hembra']}%`;
                } 
                else {
                    tdStatContent.textContent = numStat;
                }
            
                tr.appendChild(tdStatContent);
            }            
            table.appendChild(tr);
        }
    }
    return table;
}