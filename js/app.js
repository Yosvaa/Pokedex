import { body } from './body/body.js';
import { main } from './main/main.js';
import { header } from './header/header.js';
import { aside } from './aside/aside.js';
import { nav } from './nav/nav.js';
import { arrayPokemons } from './pokemon.js';

let arrayIDs = [];

app();

export function app() {
    body();
    header();
    nav();
    main(idPokemon());
    aside();
}

function idPokemon() {
    let localStoragePokemons = arrayPokemons();
    arrayIDs = [];
    
    localStoragePokemons.forEach(pokemon => {
        arrayIDs.push(pokemon['id']);
    });

    console.log(arrayIDs);

    if (arrayIDs.includes(parseInt(localStorage.getItem("pokemonID")))){
        console.log("return dentro if idPokemon");
        return parseInt(localStorage.getItem("pokemonID"));
    }

    else {
        return getNextPokemonID();
    }
}

 function getNextPokemonID() {
    let idMax = arrayIDs[arrayIDs.length - 1];
    console.log("id max en app: " + idMax);
    let currentID = parseInt(localStorage.getItem("pokemonID"));
    let nextID = currentID + 1;

    while (nextID <= idMax){
        if (arrayIDs.includes(nextID)){
            return nextID;
        }
        nextID++;
    }
    return arrayIDs[0];
 }

