"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertHTML = void 0;
var insertHTML = function insertHTML() {
  var body = document.getElementsByTagName('body')[0];
  body.innerHTML = "\n        <header class = \"header\">\n            <h1 class = \"tittle\">Cap\xEDtulo 1</h1>\n        </header>\n\n        <div class = \"container1\">\n            <figure>\n                <img class = \"storyImage\" src=\"../story_images/chapter1.png\" alt = \"Dead\" width = \"300\" height = \"300\">\n                <figcaption class = \"storyCaption\"> Jim en su casa</figcaption>\n            </figure>\n            \n            <p class = \"storyText\">\n                Tu nombre es Jim, eres un hombre de 30 a\xF1os, casado con una mujer llamada Mary, y tienes un hijo llamado John.\n                En un d\xEDa habitual como hoy, vas a trabajar a un laboratorio donde hacen experimentos biol\xF3gicos. \n                En este lugar tu lideras una investigaci\xF3n enfocada a la manipulaci\xF3n del material gen\xE9tico de diferentes virus. \n                <br>\n                Actualmente, tu esposa se encuentra muy enferma en cama. Puedes decidir entre quedarte con tu esposa o ir a trabajar \n                y regresar mas noche.\n            </p>\n\n            <a class = \"option\" href = \"./chapter2-1.html\">Ir a trabajar</a>\n            <br>\n            <a class = \"option\" href = \"./chapter2-2.html\">Quedarte con tu Esposa</a>\n        </div>\n\n    ";
};
exports.insertHTML = insertHTML;
window.onload = function () {
  insertHTML();
};