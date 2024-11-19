import { aside } from "../aside/aside.js";
import { arrayPokemons } from "../pokemon.js";

let arrayPokemon = arrayPokemons();
export function header() {
    titulo();
}

const estilos = document.createElement("style");
estilos.textContent = `

header {
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width:100%;
    margin:5px;
    padding:10px;
    height:100px;
    position: absolute;
    margin-left:50px;
    
}
    
    .titulo{
        marging:5px;
        height: 80px;
        position: absolute;
        
    } 
        
.inputBusqueda{
        width: 28px;
        height: 25px;
        position:absolute;
        right:100px;
        visibility: hidden 4s;
       
        margin-top:28px;
        border-radius: 100px;
        outline: none;
        border: 3px solid #4eb9a5;
        padding: 5px;
    }

    .inputBusqueda.activo {
        animation: example ease forwards;
        animation-duration: 1s;
        animation-delay: 0s;
    }

    @keyframes example {
        0% {
            width: 28px;
            visibility: visible;
        }
        100% {
            width: 150px;
            visibility: visible;
            
        }

    }

    .fotoLupa {
        width : 35px;
        height: 35px;
        position: absolute;
        z-index: 2;
        margin-top:30px;
        right:105px;
        transform: rotate(347deg);
        Cursor : pointer;
    }
    
`;
document.head.appendChild(estilos);

function titulo() {

    let header = document.getElementsByTagName('header')[0];
    while (header.firstChild) {
        header.removeChild(header.firstChild);
    }
    let titulo=document.createElement('img');

    titulo.setAttribute("src","/img/iconos/tituloHeader.png");
    titulo.setAttribute("class","titulo");

    header.appendChild(titulo);
    
    let img = document.createElement('img');
    img.setAttribute("src", "/img/iconos/lupa2s.png");
    img.setAttribute("class", "fotoLupa");
    header.appendChild(img);

    let input = document.createElement('input');
    input.setAttribute("id", "busqueda");
    input.setAttribute("class", "inputBusqueda");
    input.type = "text";
    header.appendChild(input);

    let ul = document.createElement('ul');
    ul.setAttribute("class", "ulEstilo");

    header.appendChild(ul);

    // mostrar en el aside los resultados
    function mostrarResultados(resultado) {
        aside(resultado);
    }
    let resultado;

    // Evento para buscar mientras se escribe
    input.addEventListener('input', () => {
        let valor = input.value.toLowerCase(); // lo que van metiendo
        if (valor === "") {
            ul.style.visibility = 'hidden'; // sino hay texto, oculta el contenedor
        } else {
            ul.style.visibility = 'visible';
            // filtra los Pokemons 
            resultado = arrayPokemon.filter(pokemon =>
                pokemon.nombre.toLowerCase().includes(valor)
            );
            // actualiza el aside 
            mostrarResultados(resultado);
        }
    });
    
    //evento de enter
    input.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" && resultado && resultado.length > 0) {
            aside([resultado[0]]); // muestra el primer Pokemons en el aside
        }
    });

    img.addEventListener("click", () => {
        input.classList.toggle("activo");
    }); 
     

}