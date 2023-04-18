"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertHTML = void 0;
require("core-js/stable");
require("regenerator-runtime/runtime");
var _newReleases = require("./newReleases.js");
var _popular = require("./popular.js");
var _chapter = require("./story/chapter1.js");
var _chapter2 = require("./story/chapter2-1.js");
var _chapter3 = require("./story/chapter2-2.js");
//import "./style.scss";
//import "./story/story.scss";
//import "./story_images/chapter1.png";
//import "./story_images/chapter2-1.png";
//import "./story_images/chapter2-2.png";

var insertHTML = function insertHTML() {
  var body = document.getElementsByTagName('body')[0];
  body.innerHTML = "\n        <header class = \"header\">\n            <h1 class = \"tittle\">Biblioteca</h1>\n        </header>\n\n        <div class = \"container\">\n            <ul>\n                <li class = \"list_item\">\n                    <a href = \"newReleases.html\">New Releases</a>\n                </li>\n\n                <li class = \"list_item\">\n                    <a href = \"popular.html\">Libros Populares</a>\n                </li>\n            </ul>\n        </div>\n    ";
};
exports.insertHTML = insertHTML;
window.onload = function () {
  insertHTML();
};