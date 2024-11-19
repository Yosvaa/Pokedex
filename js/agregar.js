import { pokemons } from "../js/pokemon.js";

if (!localStorage.getItem("pokemon")) {
    localStorage.setItem("pokemon", JSON.stringify(pokemons));
}
document.addEventListener("DOMContentLoaded", () => {
    // Referencia al <main>
    const main = document.querySelector("main");

    // Crear formulario dinámico
    const form = document.createElement("form");
    form.id = "pokemonForm";

    // Campo de Nombre
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Nombre:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "nombre";
    nameInput.required = true;

    // Campo de Tipo
    const typeLabel = document.createElement("label");
    typeLabel.textContent = "Tipo 1:";
    const typeSelect1 = document.createElement("select");
    typeSelect1.name = "type";
    typeSelect1.required = false;

    const typeLabel2 = document.createElement("label");
    typeLabel2.textContent = "Tipo 2:";
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

    // Agregar elementos al formulario
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(typeLabel);
    form.appendChild(typeSelect1);
    form.appendChild(typeLabel2);
    form.appendChild(typeSelect2);
    form.appendChild(agregar);

    // Agregar formulario al main
    main.appendChild(form);

    // Manejar el envío del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evitar recarga de la página

        // Leer datos desde localStorage
        const almacenPokemon = JSON.parse(localStorage.getItem("pokemon")) || [];

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
        localStorage.setItem("pokemon", JSON.stringify(almacenPokemon));

        // Actualizar la lista visible
        displayPokemonList();
    });

    // Mostrar la lista de Pokémon desde localStorage
    function displayPokemonList() {
        const almacenPokemon = JSON.parse(localStorage.getItem("pokemon")) || [];
        const pokemonList = document.createElement("ul");
        almacenPokemon.forEach(p => {
            const listItem = document.createElement("li");
            listItem.textContent = `#${p.id} - ${p.nombre} (${p.tipos})`;
            pokemonList.appendChild(listItem);
        });

        // Eliminar lista previa y agregar la nueva
        main.querySelector("ul")?.remove();
        main.appendChild(pokemonList);
    }

    // Cargar lista inicial
    displayPokemonList();
});
