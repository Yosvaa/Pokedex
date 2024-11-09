import { pagina01 } from './pagina01.js';
import { paginaFooter } from './paginaFooter.js';

export function paginas(pokemon, color){

    let pagina = document.createElement("div");
        pagina.id = "pagina";
        pagina.setAttribute("style", `
        font-size: 11px;
        display: flex;
        flex-direction: column;
        width: 25em;
        min-width: 25em;
        max-width: 25em;
    `);

    // MONTAR PAGINA
    pagina.appendChild(pagina01(pokemon, color));
    pagina.appendChild(paginaFooter(1, pokemon, color));
    
    return pagina;
}