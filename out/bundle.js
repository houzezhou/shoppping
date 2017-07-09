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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("//import Es6Promise from 'es6-promise';\n// Es6Promise.polyfill();\n\nconst sweetScroll = new SweetScroll();\n$(document).on(\"click\", \".js-back-to-top\", function(e) {\n    e.preventDefault(),\n    e.stopPropagation(),\n    sweetScroll.toTop(0)\n});\n$(document).on(\"click\", \".icon-reorder\", function(e) {\n    e.preventDefault(),\n    e.stopPropagation(),\n    $('body').addClass('fix_body');\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFczZQcm9taXNlIGZyb20gJ2VzNi1wcm9taXNlJztcbi8vIEVzNlByb21pc2UucG9seWZpbGwoKTtcblxuY29uc3Qgc3dlZXRTY3JvbGwgPSBuZXcgU3dlZXRTY3JvbGwoKTtcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuanMtYmFjay10by10b3BcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKSxcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpLFxuICAgIHN3ZWV0U2Nyb2xsLnRvVG9wKDApXG59KTtcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuaWNvbi1yZW9yZGVyXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCksXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKSxcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2ZpeF9ib2R5Jyk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);