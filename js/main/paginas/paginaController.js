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
        border: 0.3em solid #111;
        border-radius: 1.4em;
        border-left: none;
        background-image: url('./img/iconos/card.png');
        background-size: cover;
        background-position: center;
    `);

    // MONTAR PAGINA
    pagina.appendChild(pagina01(pokemon, color));
    pagina.appendChild(paginaFooter(1, pokemon, color));
    
    return pagina;
}