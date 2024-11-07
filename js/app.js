import { main } from './main/main.js';
import { header } from './header/header.js';


let num = Math.floor(Math.random() * 151 + 1);

header();
main(num);

