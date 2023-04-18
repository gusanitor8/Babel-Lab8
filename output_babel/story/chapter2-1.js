"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertHTML = void 0;
var insertHTML = function insertHTML() {
  var body = document.getElementsByTagName('body')[0];
  body.innerHTML = "\n        <header class = \"header\">\n            <h1 class = \"tittle\">Cap\xEDtulo 2</h1>\n        <header>\n\n        <div class = \"container1\">\n            <figure>\n                <img class = \"storyImage\" src=\"../story_images/chapter1-1\" width = \"300\" height = \"300\">\n                <figcaption class = \"storyCaption\">Jim y el Dr. Smith en el laboratorio</figcaption>\n            </figure>\n            \n            <p class = \"storyText\">\n            Llegaste a el trbaajo, tienes mucho trabajo por hacer. Algunos de tus compa\xF1eros de \n            trabajo te contaron acerca de un nuevo descubrimiento. Parece que se trata de un \n            virus peligroso. Sin embargo, tu amigo y compa\xF1ero de trabajo, el Dr. Smith, llega a hablarte\n            y te ofrece ir por un caf\xE9. \xBFQu\xE9 haces?\n            </p>\n\n            <a class = \"option\">Ir por un caf\xE9 con el Dr. Smith</a>\n            <br>\n            <a class = \"option\">Quedarse en el laboratorio</a>\n        </div>\n    ";
};
exports.insertHTML = insertHTML;
window.onload = function () {
  insertHTML();
};