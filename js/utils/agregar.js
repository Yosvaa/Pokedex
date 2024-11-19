import { arrayPokemons } from "../pokemon.js";
import { body } from '../body/body.js';
import { header } from '../header/header.js';
import { aside } from '../aside/aside.js';
import { nav } from '../nav/nav.js';
// import { header } from "../js/header/header.js";

document.addEventListener("DOMContentLoaded", () => {
    body();
    header();
    nav();
    aside(); 
    // Referencia al <main>
    const main = document.getElementsByTagName('main')[0];
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    
    let divCard = document.createElement('div');
    divCard.setAttribute("style", `
        padding: 1em; 
        display: flex; 
        flex-direction: column; 
        align-items: center;
        justify-content: space-between;  
        border: 0.2em solid black;
        border-radius: 1em;
        width: 100%;
        background-image: url('../img/iconos/card.png'), radial-gradient(circle at center 28%, white 5%, black 22%);
        background-size: cover;
        background-position: center;
        border-right: none;
    `);


    // IMAGEN POKEMON
    let img = document.createElement('img');
    img.src = "../img/iconos/nuevo.png";
    img.setAttribute("style","height: 6em; margin-top: 4em;");
    divCard.appendChild(img);

    // Crear formulario dinámico
    const form = document.createElement("form");
    form.id = "pokemonForm";
    form.setAttribute("style", "display: flex; flex-direction: column; align-items: center;");

    // Campo de Nombre
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Nombre:";
    nameLabel.setAttribute("style","display: flex; font-weight: bold; margin: 0; padding: 0em;");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "nombre";
    nameInput.required = true;

    // Campo de Tipo
    const typeLabel = document.createElement("label");
    typeLabel.textContent = "Tipo 1:";
    typeLabel.setAttribute("style","font-weight: bold; margin: 0; padding: 0em;");
    const typeSelect1 = document.createElement("select");
    typeSelect1.name = "type";
    typeSelect1.required = false;

    const typeLabel2 = document.createElement("label");
    typeLabel2.textContent = "Tipo 2:";
    typeLabel2.setAttribute("style","font-weight: bold; margin: 0; padding: 0em;");
    const typeSelect2 = document.createElement("select");
    typeSelect2.name = "type";
    typeSelect2.required = false;

    // Opciones de Tipo
    const types = ["","Fuego", "Hielo", "Volador", "Psíquico","Agua", "Tierra", "Roca", "Planta", "Veneno", "Acero", "Bicho", "Dragón", "Eléctrico", "Fantasma", "Hada", "Lucha", "Normal", "Siniestro"];
    types.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        typeSelect1.appendChild(option);
    });
    types.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        typeSelect2.appendChild(option);
    });

    // Botón de Submit
    const agregar = document.createElement("button");
    agregar.type = "submit";
    agregar.textContent = "Agregar Pokémon";
    agregar.setAttribute("style",`
        padding: 1em;
        margin-top: 1em;
        cursor: pointer;
        font-size: 11px;
        text-align: center;
        border: 0.3em solid #ddd;
        border-radius: 1em;
        text-decoration: none;
        color: inherit;
        background-color: white;
    `);

    // Agregar elementos al formulario
    form.appendChild(nameLabel);
    form.appendChild(document.createElement('br'));
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(typeLabel);
    form.appendChild(typeSelect1);
    form.appendChild(typeLabel2);
    form.appendChild(typeSelect2);
    form.appendChild(document.createElement('br'));
    form.appendChild(agregar);

    // Agregar formulario al main
    divCard.appendChild(form);
    main.appendChild(divCard);

    // Manejar el envío del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evitar recarga de la página

        // Leer datos desde localStorage
        const almacenPokemon = arrayPokemons();

        // Obtener el último ID basado en los Pokémon existentes
        const lastID = almacenPokemon.length > 0
            ? Math.max(...almacenPokemon.map(p => p.id))
            : 0;
        const newID = lastID + 1;

        // Obtener datos del formulario
        const nombre = nameInput.value.trim();
        const tipos = [];
        if(typeSelect1.value !=""){
            tipos.push(typeSelect1.value);
        }
        if(typeSelect2.value !="" && typeSelect2.value != typeSelect1.value){
            tipos.push(typeSelect2.value);
        }

        // Crear nuevo Pokémon
        const newPokemon = { id: newID, nombre, tipos };

        // Usar Location para mostrar los datos
        const queryString = new URLSearchParams(newPokemon).toString();
        window.location.href = `${window.location.pathname}?${queryString}`;

        // Guardar en localStorage (sin modificar el array original)
        almacenPokemon.push(newPokemon);
        localStorage.setItem("pokemons", JSON.stringify(almacenPokemon));

        location.href = "../index.html";
        // Actualizar la lista visible
        // displayPokemonList();
    });

    // // Mostrar la lista de Pokémon desde localStorage
    // function displayPokemonList() {
    //     const almacenPokemon = arrayPokemons();
    //     const pokemonList = document.createElement("ul");
    //     almacenPokemon.forEach(p => {
    //         const listItem = document.createElement("li");
    //         listItem.textContent = `#${p.id} - ${p.nombre} (${p.tipos})`;
    //         pokemonList.appendChild(listItem);
    //     });

    //     // Eliminar lista previa y agregar la nueva
    //     main.querySelector("ul")?.remove();
    //     main.appendChild(pokemonList);
    // }

    // // Cargar lista inicial
    // displayPokemonList();
});
