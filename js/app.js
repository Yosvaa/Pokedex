import { body } from './body/body.js';
import { main } from './main/main.js';
import { header } from './header/header.js';
import { aside } from './aside/aside.js';
import { nav } from './nav/nav.js';

export function app() {
    let num = Math.floor(Math.random() * 151 + 1);
    body();
    header();
    nav();
    main(num);
    aside(); 
}

app();