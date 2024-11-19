// CREAR TABLE
let table = document.createElement('table');
table.id = "table";
table.setAttribute("style", `
    padding: 0 2em;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`);

export function pagina02(pokemon, color){
    table.innerHTML = "";
    // ESTADISTICAS PARA LA PAGINA
    let estadisticas = ["fuerza_contra", "debil_contra", "inmune_contra", "resistente_a"];

    for (let estadistica in pokemon) {
        
        if (estadisticas.includes(estadistica) && pokemon[estadistica].length != 0){
            
            let tr = document.createElement('tr');
            tr.setAttribute("style", `
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                max-width: 100%;
                max-height: 100%;
                border: 0.2em solid #222;
                border-radius: 0.5em;
                background-image: url('../img/iconos/card.png'), radial-gradient(circle at right 33%, white 5%, ${color} 45%);
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
                margin-bottom: 0.5em;
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
                tdTipo.setAttribute("style", "display: flex; justify-content: center; flex-wrap: wrap;")

                pokemon[estadistica].forEach(tipo => {
                    let img = document.createElement('img');
                    img.src = "../img/Tipo/" + tipo + ".png";
                    img.setAttribute("style","height: 1.45em; border: 0.15em solid #111; border-radius: 1em; margin: 0.2em;");

                    tdTipo.appendChild(img);
                });
                tr.appendChild(tdTipo);
                
            }
            table.appendChild(tr);
        }
    }
    return table;
}