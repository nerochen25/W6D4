/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n  \n  constructor(arr) {\n    this.arr = arr;\n  }\n  \n  html(string) {\n    if (string) {\n      let newArr = this.arr.forEach((el) => el.innerHTML = string);\n    } else {\n      return this.arr[0].innerHTML;\n    }\n  }\n\n  \n  empty() {\n    let newArr = this.arr.forEach((el) => el.innerHTML = '');\n    return newArr;\n  }\n  \n  append(content) {\n    if (content instanceof DomNodeCollection) {\n      this.arr.concat(content.arr);\n    } else if (content instanceof HTMLElement) {\n      this.arr.forEach((el) => el.appendChild(content));\n    } else if (typeof content === 'string') {\n      this.arr.forEach((el) => el.innerHTML += content);\n    } else {\n      console.error(\"TYPE NOT VALID\");\n    }\n  }\n  \n  attr(name, val) {\n    if (!val) {\n      this.arr[0].getAttributes(name);\n    } else {\n      this.arr.forEach((el) => el.setAttribute(name, val));\n    }\n  }\n  \n  addClass(arg) {\n    this.arr.forEach((el) => el.classList.add(arg));\n  }\n  \n  removeClass(arg) {\n    this.arr.forEach((el) => el.classList.remove(arg));\n  }\n  \n  children() {\n    const childArr = [];\n    this.arr.forEach((el) => {\n      let nodeChildArr = Array.from(el.children);\n      nodeChildArr.forEach((nodeChild) => {\n        childArr.push(nodeChild);\n      });\n    });\n    return new DomNodeCollection(childArr);\n  }\n  \n  parents() {\n    const parentArr = [];\n    this.arr.forEach((el) => parentArr.push(el.parentNode));\n    return new DomNodeCollection(parentArr);\n  }\n}\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nfunction $l(selector) {\n  if (selector instanceof HTMLElement) {\n    let htmlEl = [selector];\n    return new DomNodeCollection(htmlEl);\n  } else {\n    let cssEl = document.querySelectorAll(selector);\n    let arr = Array.from(cssEl);\n    return new DomNodeCollection(arr);\n  }\n}\n\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });