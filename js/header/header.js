import { pokemons } from "./pokemon.js";

function barraBusqueda() {

    let body = document.getElementsByClassName('body')[0];
    let header = document.getElementsByTagName('header')[0];
    let input = document.createElement('input');
    let img=document.createElement('img');
    //img.setAttribute("src","/fotos/lupa.png");
    //header.appendChild(img);
    input.setAttribute("id","busqueda");
    input.type = "text";
    header.appendChild(input);
    input.setAttribute("style","position:absolute; right:0; margin-right:70px; border-radius:22px; -webkit-appearance: none;  outline: none; border: 3px solid rgb(111, 215, 215); padding: 5px; margin-top: 20px;");
    let ul = document.createElement('ul');
    ul.setAttribute("style","")
    header.appendChild(ul);
    /**
     * Con esta funcion creamos la forma en la que vamos a mostrar los resultados 
     * en este caso es en forma de lista.
     * @param {object} resultado 
     */
    
    function mostrarResultados(resultado) {
        ul.innerHTML = ""; //limpia los resultados anteriores
        resultado.forEach(i => {
            let li = document.createElement('li');
            li.textContent = i['nombre'];
            ul.setAttribute("style","position:absolute; right:0; margin-right:80px;");
            ul.appendChild(li);
        });
    }

    input.addEventListener('input', () => {
        let valor = input.value.toLowerCase();// las letras que van metiendo
        //comprobamos si se incluyen en nuestro array de pokemons, y lo que nos
        // devuelva es el valor que mostraremos (las ocincidencias); 
        let resultado = pokemons.filter(i => i['nombre'].toLowerCase().includes(valor));
        //le pasamos el objeto con coincidencias para que lo muestre;
        mostrarResultados(resultado);

    });

}

barraBusqueda();
