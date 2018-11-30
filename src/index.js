let DomNodeCollection = require('./dom_node_collection.js');

function $l(selector) {
  if (selector instanceof HTMLElement) {
    let htmlEl = [selector];
    return new DomNodeCollection(htmlEl);
  } else {
    let cssEl = document.querySelectorAll(selector);
    let arr = Array.from(cssEl);
    return new DomNodeCollection(arr);
  }
}

window.$l = $l;