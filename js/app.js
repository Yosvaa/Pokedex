import { main } from './main/main.js';
import { header } from './header/header.js';
import { aside } from './aside/aside.js';

let body = document.getElementsByTagName('body')[0];
body.style=`
    display: flex;
`;
let num = Math.floor(Math.random() * 151 + 1);

header();
main(num);
aside();
