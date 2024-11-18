import { pokemons } from "../pokemon.js";

export function nav(){
    navFiltros();
}

const estilos= document.createElement("style");
estilos.textContent= `
        nav {
            width: 45em;
            height:20px;
            padding: 3px;
            background-color: aqua;
            border-radius: 5px;
            position: absolute;
            margin-top: 65px;
        }

        /*todo*/
        nav::-webkit-scrollbar {
            width: 5px;
            height: 10px;
        }
        /* sombra del rectangulo*/
        nav::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
        }

        /* cosita que se mueve*/
        nav::-webkit-scrollbar-thumb {
            background: rgb(153, 82, 169);
            border-radius: 10px; 
        }

        .scroll-container {
            width: 100%;
            height: 50px;
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            scroll-behavior: smooth;
        }
        
        .scroll-page {
            cursor: pointer; 
            display:inline;
            padding: 5px 10px;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-size: 1em;
        }
`;

document.body.appendChild(estilos);

function navFiltros() {
    let nav = document.getElementsByTagName('nav')[0];
    let div = document.createElement('div');
    div.setAttribute("class", "scroll-container");

    // Crear una copia del objeto pokemons
    let copiaPokemons = Object.values(pokemons);

    // Reducir la lista por tipo
    let porTipo = copiaPokemons.reduce((acumulador, pokemon) => {
        let { tipos } = pokemon; // Asume que 'tipos' es un array
        if (Array.isArray(tipos)) {
            tipos.forEach(tipo => {
                if (!acumulador[tipo]) {
                    acumulador[tipo] = [];
                }
                acumulador[tipo].push(pokemon);
            });
        }
        return acumulador; // ¡Importante! Devuelve el acumulador
    }, {});

    // Crear un div para cada tipo
    Object.keys(porTipo).forEach(tipo => {
        let divPage = document.createElement('div');
        divPage.setAttribute("class", "scroll-page");
        divPage.setAttribute("value", tipo);
        divPage.textContent = tipo; // Muestra el nombre del tipo
        div.appendChild(divPage);
    });

    // Agregar los elementos al DOM
    nav.appendChild(div);
}