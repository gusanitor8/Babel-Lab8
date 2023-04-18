"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertHTML = void 0;
var insertHTML = function insertHTML() {
  var body = document.getElementsByTagName('body')[0];
  body.innerHTML = "\n        <header class = \"header\">\n            <h1 class = \"tittle\">Libros Populares</h1>\n        </header>\n\n        <div class = \"container\">\n            <ul>\n                <li class = \"list_item\">\n                    <a href = \"https://www.goodreads.com/book/show/400270.We_Can_Build_You\">\n                        <b>We Can Build You</b> - <i>Philip K. Dick</i>\n                    </a>\n                </li>\n\n                <li class = \"list_item\">\n                    <a href = \"https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore\">\n                        <b>Kafka on The Shore</b> - <i>Haruki Murakami</i>\n                    </a>\n                </li>\n\n                <li class = \"list_element\">\n                    <a href = \"https://www.goodreads.com/book/show/170448.Animal_Farm\">\n                        <b>Animal Farm</b> - <i>George Orwell</i> \n                    </a>\n                </li>\n            </ul>\n        </div>\n    ";
};
exports.insertHTML = insertHTML;
window.onload = function () {
  insertHTML();
};