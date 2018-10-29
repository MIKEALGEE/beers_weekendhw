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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Beers = __webpack_require__(/*! ./models/beers.js */ \"./src/models/beers.js\");\nconst ErrorView = __webpack_require__(/*! ./views/error_view.js */ \"./src/views/error_view.js\");\nconst BeerListView = __webpack_require__(/*! ./views/beer_list_view.js */ \"./src/views/beer_list_view.js\");\nconst BeerDetailView = __webpack_require__(/*! ./views/beer_detail_view.js */ \"./src/views/beer_detail_view.js\");\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\nconst selectElement = document.querySelector('select#beer-select');\nconst selectView = new SelectView(selectElement);\nselectView.bindEvents();\n\nconst listContainer = document.querySelector('#beer-list');\nconst beerListView  = new BeerListView(listContainer);\nbeerListView.bindEvents();\n\n\n  const beers = new Beers();\n  beers.bindEvents();\n  beers.getData();\n\nconsole.log(beers);\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url;\n};\n\nRequest.prototype.get = function () {\n  return fetch(this.url)\n    .then( (response) => response.json() );\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/beers.js":
/*!*****************************!*\
  !*** ./src/models/beers.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst Beers = function() {\n  this.beersData = [];\n  this.beerName = [];\n};\n\nBeers.prototype.bindEvents = function() {\n  PubSub.subscribe(\"SelectView:change\", (event) => {\n    const beer = event.detail;\n    this.getData(beer);\n    this.publishBeers(beer);\n  })\n}\n\nBeers.prototype.getData = function() {\n  const url = `https://api.punkapi.com/v2/beers/`;\n  const request = new Request(url);\n  request.get()\n    .then((data) => {\n      this.beersData = data;\n      PubSub.publish('Beers:beers-ready', this.beersData);\n    })\n    .catch((error) => {\n      PubSub.publish(\"Beers:error\", error);\n    });\n};\n\nBeers.prototype.publishBeers = function(data) {\n  this.beerName = this.uniqueBeerList();\n  PubSub.publish('Beers:beers-ready', this.beerName)\n};\n\nBeers.prototype.beerList = function() {\n  console.log(this);\n  const fullList = this.beersData.map(beer => beer.name);\n  return fullList;\n\n};\n\nBeers.prototype.uniqueBeerList = function() {\n  return this.beerList().filter((beer, index, array) => {\n    return array.indexOf(beer) === index;\n  });\n};\n\nmodule.exports = Beers;\n\n\n//# sourceURL=webpack:///./src/models/beers.js?");

/***/ }),

/***/ "./src/views/beer_detail_view.js":
/*!***************************************!*\
  !*** ./src/views/beer_detail_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const BeerDetailView = function () {\n\n};\n\nBeerDetailView.prototype.createBeerDetail = function (beer) {\n  const beerDetail = document.createElement('div');\n  beerDetail.classList.add('beer-detail');\n\n  const name = document.createElement('h3');\n  name.textContent = beer.name;\n  beerDetail.appendChild(name);\n\n  const detailsList = document.createElement('ul');\n  const tagline = this.createDetailListItem('Tagline', beer.tagline)\n  detailsList.appendChild(tagline);\n\n  const description = this.createDetailListItem(\"Description\", beer.description)\n  detailsList.appendChild(description);\n\n  const firstBrewed = this.createDetailListItem(\"First Brewed:\", beer.first_brewed)\n  detailsList.appendChild(firstBrewed);\n\n  const image = document.createElement('IMG');\n  image.setAttribute('src',`${beer.image_url}`)\n  image.setAttribute('width', 60);\n  image.setAttribute('height', 150);\n\n  // image.textContent = `src`,`${beer.image_url}`;\n  detailsList.appendChild(image);\n\n  beerDetail.appendChild(detailsList)\n  return beerDetail;\n\n};\n\nBeerDetailView.prototype.createDetailListItem = function (label, property){\n  const element = document.createElement('li');\n  element.textContent = `${label}: ${property}`;\n  return element;\n\n};\n\nmodule.exports = BeerDetailView;\n\n\n//# sourceURL=webpack:///./src/views/beer_detail_view.js?");

/***/ }),

/***/ "./src/views/beer_list_view.js":
/*!*************************************!*\
  !*** ./src/views/beer_list_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst BeerDetailView = __webpack_require__ (/*! ./beer_detail_view.js */ \"./src/views/beer_detail_view.js\");\n\nconst BeerListView = function (container) {\n  this.container = container;\n};\n\nBeerListView.prototype.bindEvents = function () {\n  PubSub.subscribe('Beers:beers-ready', (event) =>{\n    this.clearList();\n    this.renderBeerDetailView(event.detail);\n  });\n};\n\nBeerListView.prototype.clearList = function () {\n  this.container.innerHTML ='';\n};\n\nBeerListView.prototype.renderBeerDetailView = function(beers) {\n  beers.forEach((beer) => {\n    const beerItem = this.createBeerListItem(beer);\n    this.container.appendChild(beerItem);\n  });\n};\n\nBeerListView.prototype.createBeerListItem = function(beer) {\n  const beerDetailView = new BeerDetailView();\n  const beerDetail = beerDetailView.createBeerDetail(beer);\n  return beerDetail;\n};\n\n\nmodule.exports = BeerListView;\n\n\n//# sourceURL=webpack:///./src/views/beer_list_view.js?");

/***/ }),

/***/ "./src/views/error_view.js":
/*!*********************************!*\
  !*** ./src/views/error_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\n\n//# sourceURL=webpack:///./src/views/error_view.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst SelectView = function(selectElement) {\n  this.selectElement = selectElement;\n};\n\nSelectView.prototype.bindEvents = function() {\n  PubSub.subscribe('Beers:beers-ready', (event) => {\n    this.populateSelect(event.detail);\n  });\n\n  this.selectElement.addEventListener('change', (event) => {\n    const selectedIndex = event.target.value;\n    PubSub.publish('SelectView:change', selectedIndex);\n  });\n};\n\nSelectView.prototype.populateSelect = function(beers) {\n  beers.forEach((beer, index) => {\n    const option = this.createBeerOption(beer, index);\n    this.selectElement.appendChild(option);\n  })\n};\n\nSelectView.prototype.createBeerOption = function(beer, index) {\n  const option = document.createElement('option');\n  option.textContent = beer.name;\n  option.value = index;\n  return option;\n};\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ })

/******/ });