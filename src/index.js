import { insertHTML as insertNR } from "./newReleases.js";
import { insertHTML as insertP } from "./popular.js";
import { insertHTML as insertC1 } from "./story/chapter1.js";
import { insertHTML as insertC2 } from "./story/chapter2-1.js";
import { insertHTML as insertC3 } from "./story/chapter2-2.js";
//import "./style.scss";
//import "./story/story.scss";
//import "./story_images/chapter1.png";
//import "./story_images/chapter2-1.png";
//import "./story_images/chapter2-2.png";

export const insertHTML = () => {
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = `
        <header class = "header">
            <h1 class = "tittle">Biblioteca</h1>
        </header>

        <div class = "container">
            <ul>
                <li class = "list_item">
                    <a href = "newReleases.html">New Releases</a>
                </li>

                <li class = "list_item">
                    <a href = "popular.html">Libros Populares</a>
                </li>
            </ul>
        </div>
    `
}

window.onload = () => {
    insertHTML();
}