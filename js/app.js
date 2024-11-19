import { main } from './main/main.js';
import { header } from './header/header.js';
import { aside } from './aside/aside.js';
import { nav } from './nav/nav.js';

let body = document.getElementsByTagName('body')[0];
body.style=`
    display: flex;
    justify-content: center;
    background-color:#81caba;
    /*background-image: url('./img/iconos/fondo.png');*/
    background-size: 1315px 450px;
    background-position: 50% 90%;
    background-repeat: no-repeat;
`;
let num = Math.floor(Math.random() * 151 + 1);

header();
nav();
main(num);
aside();
