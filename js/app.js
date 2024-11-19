import { body } from './body/body.js';
import { main } from './main/main.js';
import { header } from './header/header.js';
import { aside } from './aside/aside.js';
import { nav } from './nav/nav.js';

export function app() {
    const queryParams = new URLSearchParams(window.location.search);
    let id;
    if(queryParams.get("id")==null){
        id = 1;
        
    } else{
        id = queryParams.get("id");
    }
    body();
    header();
    nav();
    main(id);
    aside();
}

app();

