/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js?!./common/SCSS/common.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--6-2!../node_modules/postcss-loader/src??ref--6-3!../node_modules/sass-loader/dist/cjs.js??ref--6-4!./common/SCSS/common.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./common/SCSS/common.scss?../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js??ref--6-2!../node_modules/postcss-loader/src??ref--6-3!../node_modules/sass-loader/dist/cjs.js??ref--6-4");

/***/ }),

/***/ "./common/SCSS/common.scss":
/*!*********************************!*\
  !*** ./common/SCSS/common.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--6-2!../../../node_modules/postcss-loader/src??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--6-4!./common.scss */ \"../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js?!./common/SCSS/common.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./common/SCSS/common.scss?");

/***/ }),

/***/ "./common/js/common.js":
/*!*****************************!*\
  !*** ./common/js/common.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SCSS_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SCSS/common.scss */ \"./common/SCSS/common.scss\");\n/* harmony import */ var _SCSS_common_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SCSS_common_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/index/index.js */ \"./pages/index/index.js\");\n // import '../css/common.css'\n// import * as $ from 'jquery'\n\n\n\n\n//# sourceURL=webpack:///./common/js/common.js?");

/***/ }),

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const header = document.querySelector('.header');\nconst burger = document.querySelector('.burger-button');\nconst burgerLine = document.querySelectorAll('.burger__line');\nconst logo = document.querySelector('.logo-conteiner');\nconst MenuLinks = document.querySelector('.menu-links');\nconst headerLink = document.querySelector('.header-link');\nconst windowMenuFooter = document.querySelector('.menu-footer');\nconst windowMenu = document.querySelector('.windows-menu');\nconst menu = document.querySelector('.menu');\nconst threeActions = document.querySelector('.three-actions');\nconst body = document.querySelector('body'); // Плавное появление header при загрузке страницы\n\nsetTimeout(function () {\n  header.style.opacity = \"1\";\n  header.style.transform = \"translateY(0)\";\n}, 1000); // setTimeout(function() {\n//   logo.classList.add('logo-is-active')\n// }, 2000)\n// Функция развертки бургера при загрузке страницы\n\nfunction removeAttr() {\n  for (let key in burgerLine) {\n    burgerLine[key].removeAttribute(\"style\");\n  }\n}\n\nsetTimeout(removeAttr, 2200); // События и функции, связанные с кнопкой burger\n\nlet counter = 0; // Счетчик \n\nburger.addEventListener('click', () => {\n  // Анимация логотипа при клики на бургер \n  let clientHeight = document.querySelector('body').clientHeight;\n  let clientWidth = document.querySelector('body').clientWidth;\n  let elem = threeActions.getBoundingClientRect();\n\n  if (logo.classList.contains('logo-is-active') && counter == 0 && clientWidth >= 1200) {\n    logo.classList.toggle('logo-is-active-remove');\n    logo.classList.toggle('logo-is-active');\n  } else if (counter == 1 && elem.top < 0 && elem.top < clientHeight && clientWidth >= 1200) {\n    setTimeout(function () {\n      logo.classList.toggle('logo-is-active');\n      logo.classList.toggle('logo-is-active-remove');\n    }, 2000);\n  }\n\n  if (counter === 0) {\n    document.documentElement.style.overflowY = \"hidden\";\n  } else {\n    document.documentElement.style.overflowY = \"scroll\";\n  }\n\n  burger.classList.toggle('burger_active'); // burger.classList.toggle('burger-hover');\n\n  if (counter === 0) {\n    windowMenu.classList.add('windows-menu_active-positionY1');\n    menu.style.zIndex = \"500\";\n    setTimeout(function () {\n      MenuLinks.classList.add('menu-links-active');\n    }, 150);\n    setTimeout(function () {\n      headerLink.classList.toggle('header-link__active'); // задерживает появление ссылки личный кабинет\n\n      windowMenuFooter.classList.toggle('menu-footer_active'); // задерживает появление текста menu-footer\n    }, 1400);\n    counter++;\n  } else {\n    burger.setAttribute(\"disabled\", \"true\"); // блокирует burger\n\n    headerLink.classList.toggle('header-link__active');\n    windowMenuFooter.classList.toggle('menu-footer_active'); // Меняет цвет текста ссылок меню\n\n    MenuLinks.classList.toggle('menu-links-active-color');\n    windowMenu.classList.add('windows-menu_active-positionY2');\n    windowMenu.classList.add('windows-menu_active-positionXY'); // Замедляет изчезновение текста\n\n    setTimeout(function () {\n      MenuLinks.classList.remove('menu-links-active');\n    }, 300);\n    setTimeout(function () {\n      // Удаляет актывные классы, чтобы вернуть блок в начальное положение до первого нажатия\n      windowMenu.classList.remove('windows-menu_active-positionY1');\n      windowMenu.classList.remove('windows-menu_active-positionY2');\n      windowMenu.classList.remove('windows-menu_active-positionXY');\n      MenuLinks.classList.remove('menu-links-active-color');\n      burger.removeAttribute(\"disabled\"); // разблокирует кнопку\n\n      menu.style.zIndex = \"\";\n    }, 2300);\n    counter--;\n  }\n}); // Анимация логотипа\n\nfunction logoActive(clientHeight) {\n  let elem = threeActions.getBoundingClientRect();\n\n  if (elem.top < 0 && elem.top < clientHeight) {\n    logo.classList.remove('logo-is-active-remove');\n    logo.classList.add('logo-is-active');\n  } else if (elem.top > 0 && elem.top < clientHeight && logo.classList.contains('logo-is-active')) {\n    logo.classList.add('logo-is-active-remove');\n    logo.classList.remove('logo-is-active');\n  }\n}\n\nwindow.addEventListener('scroll', () => {\n  let clientHeight = document.querySelector('body').clientHeight;\n  let clientWidth = document.querySelector('body').clientWidth;\n\n  if (clientWidth >= 1200) {\n    logoActive(clientHeight);\n  } else {\n    logo.classList.remove('logo-is-active');\n    logo.classList.remove('logo-is-active-remove');\n  }\n});\n\n//# sourceURL=webpack:///./components/header/header.js?");

/***/ }),

/***/ "./pages/index/animation.js":
/*!**********************************!*\
  !*** ./pages/index/animation.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/header/header.js */ \"./components/header/header.js\");\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_header_header_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst annotationBackgroundImg = document.querySelectorAll('.annotation__background-img');\nconst annotationTextGeaderLine = document.querySelectorAll('.annotation-text__header-line');\nconst annotationTextConpany = document.querySelector('.annotation-text__text-conpany');\nconst services = document.querySelector('.services');\nconst threeActionsButton = document.querySelector('.three-actions-button');\nconst footerActionsText = document.querySelector('.footer-actions__text');\nconst actions = document.querySelector('.actions');\nconst headerWrapper = document.querySelector('.header-wrapper');\nconst footerWrapper = document.querySelector('.footer-wrapper');\nconst businessDevelopmentTop = document.querySelector('.business-development-top');\nconst businessDevelopmentCards = document.querySelector('.business-development-cards');\nconst body = document.querySelector('body');\nconst equipment = document.querySelector('.equipment');\nconst equipmentImg = document.querySelector('.equipment__img');\nconst opportunities = document.querySelector('.opportunities');\nannotationBackgroundImg[0].classList.add('annotation__background-img-active-opasity');\nsetTimeout(function () {\n  services.classList.add('services-active');\n  annotationTextConpany.style.opacity = \"1\";\n}, 1000);\nsetTimeout(function () {\n  annotationTextGeaderLine[0].classList.add('header-line-active');\n}, 2300);\nsetTimeout(function () {\n  annotationTextGeaderLine[1].classList.add('header-line-active');\n}, 2500);\nsetTimeout(function () {\n  annotationBackgroundImg[0].classList.add('annotation__background-img-active-transmorm');\n  setTimeout(function () {\n    annotationBackgroundImg[0].classList.remove('annotation__background-img-active-opasity');\n    annotationBackgroundImg[1].classList.add('annotation__background-img-active-transmorm');\n    annotationBackgroundImg[1].classList.add('annotation__background-img-active-opasity');\n    setTimeout(function () {\n      annotationBackgroundImg[1].classList.remove('annotation__background-img-active-opasity');\n      annotationBackgroundImg[2].classList.add('annotation__background-img-active-transmorm');\n      annotationBackgroundImg[2].classList.add('annotation__background-img-active-opasity');\n      setTimeout(function () {\n        annotationBackgroundImg[0].classList.remove('annotation__background-img-active-transmorm');\n        annotationBackgroundImg[1].classList.remove('annotation__background-img-active-transmorm');\n        annotationBackgroundImg[2].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';\n      }, 10100);\n    }, 8000);\n  }, 8000);\n}, 3800); // Анимация при прокрутке страницы\n\nlet elements = document.querySelectorAll('[data-anima]');\n\nfunction isVisible(clientHeight) {\n  for (let i = 0; i < elements.length; i++) {\n    let elem = elements[i].getBoundingClientRect();\n\n    if (elem.bottom > 0 && elem.bottom < clientHeight) {\n      switch (+elements[i].dataset.anima) {\n        case 1:\n          elements[i].classList.add('is-active-position');\n          break;\n\n        case 2:\n          actions.classList.add('action-is-active');\n          setTimeout(function () {\n            headerWrapper.classList.add('header-is-active');\n            footerWrapper.classList.add('footer-is-active');\n          }, 3000);\n          break;\n\n        case 3:\n          businessDevelopmentTop.classList.add('bd-top-active');\n          businessDevelopmentCards.classList.add('cards-active');\n          break;\n\n        case 4:\n          if (body.clientWidth <= 1000) {\n            equipment.classList.add('equipment-active');\n            setTimeout(function () {\n              equipment.style.backgroundColor = \"#ffc107\";\n            }, 1100);\n          } else {\n            equipmentImg.style.animation = 'AnimaImg 3s ease-in-out';\n            equipmentImg.style.animationFillMode = 'forwards';\n            setTimeout(function () {\n              equipment.classList.add('equipment-active');\n            }, 3000);\n            setTimeout(function () {\n              equipment.style.backgroundColor = \"#ffc107\";\n            }, 4100);\n          }\n\n          break;\n\n        case 5:\n          opportunities.classList.add('opportunities-active');\n          break;\n      }\n    }\n  }\n}\n\nwindow.addEventListener('scroll', () => {\n  let clientHeight = document.querySelector('body').clientHeight;\n  isVisible(clientHeight);\n}); // Анимация, меняющая цвет текста по наведению на кнопку\n\nthreeActionsButton.addEventListener('mouseover', function () {\n  footerActionsText.classList.add('text-is-active');\n});\nthreeActionsButton.addEventListener('mouseout', function () {\n  footerActionsText.classList.remove('text-is-active');\n});\n\n//# sourceURL=webpack:///./pages/index/animation.js?");

/***/ }),

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ \"./pages/index/animation.js\");\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.js */ \"./components/header/header.js\");\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header_header_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./pages/index/index.js?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi @babel/polyfill ./common/js/common.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./common/js/common.js */\"./common/js/common.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./common/js/common.js?");

/***/ })

/******/ });