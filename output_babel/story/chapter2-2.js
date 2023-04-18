"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertHTML = void 0;
var insertHTML = function insertHTML() {
  var body = document.getElementsByTagName('body')[0];
  body.innerHTML = "\n    <header class = \"header\">\n        <h1 class = \"tittle\">Cap\xEDtulo 2</h1>\n    </header>\n\n    <div class = \"container1\">\n        <figure>\n            <img class = \"storyImage\" src=\"../story_images/chapter2-2.png\" width = \"300\" height = \"300\">\n            <figcaption class = \"storyCaption\">Jim y el Dr. Smith en el laboratorio</figcaption>\n        </figure>\n        \n        <p class = \"storyText\">\n            Te quedas en casa descansando en un sill\xF3n, mientras tanto tu esposa se encuentra en cama.\n            Piensas que probablemente deber\xEDas hacer algo por ella ya que despu\xE9s de todo, te quedaste \n            en casa por ella. Piensas que probablemente tenga hambre ya que todav\xEDa no ha desayunado.\n            Pero ahora que lo piensas, no has visto como se encuentra. \xBFQu\xE9 haces?\n        </p>\n\n        <a class = \"option\">Ir con tu esposa al cuarto</a>\n        <br>\n        <a class = \"option\">Ir a la cocina por algo de comer para tu esposa</a>\n    </div>\n\n    ";
};
exports.insertHTML = insertHTML;
window.onload = function () {
  insertHTML();
};