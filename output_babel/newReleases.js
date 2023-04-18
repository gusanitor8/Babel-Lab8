"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertHTML = void 0;
var insertHTML = function insertHTML() {
  var body = document.getElementsByTagName('body')[0];
  body.innerHTML = "\n        <header class = \"header\">\n            <h1 class = \"tittle\">New Releases</h1>\n        </header>\n\n        <div class = \"container\">\n            <ul>\n                <li class = \"list_item\">\n                    <a href=\"./story/chapter1.html\"> <b>LIBRO ULTRA SECRETO NO DAR CLICK</b> - <i>????</i> </a>\n                </li>\n            </ul>\n        </div>\n\n    ";
};
exports.insertHTML = insertHTML;
window.onload = function () {
  insertHTML();
};