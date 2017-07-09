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

eval("//import Es6Promise from 'es6-promise';\n// Es6Promise.polyfill();\n\nconst sweetScroll = new SweetScroll();\n$(document).on(\"click\", \".js-back-to-top\", function(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    sweetScroll.toTop(0)\n});\n$(document).on(\"click\", \".icon-reorder\", function(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    $('body').addClass('fix_body');\n});\n$(document).on(\"click\", \".c-site-menu-toggle__inner\", function(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    $('body').removeClass('fix_body');\n});\n$(document).on(\"click\", \"#content .category\", function(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    if($(this).parent().hasClass('active')){\n        $(this).parent().removeClass('active')\n    }else{\n        $(this).parent().addClass('active');\n    }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRXM2UHJvbWlzZSBmcm9tICdlczYtcHJvbWlzZSc7XG4vLyBFczZQcm9taXNlLnBvbHlmaWxsKCk7XG5cbmNvbnN0IHN3ZWV0U2Nyb2xsID0gbmV3IFN3ZWV0U2Nyb2xsKCk7XG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmpzLWJhY2stdG8tdG9wXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBzd2VldFNjcm9sbC50b1RvcCgwKVxufSk7XG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmljb24tcmVvcmRlclwiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdmaXhfYm9keScpO1xufSk7XG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmMtc2l0ZS1tZW51LXRvZ2dsZV9faW5uZXJcIiwgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnZml4X2JvZHknKTtcbn0pO1xuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIiNjb250ZW50IC5jYXRlZ29yeVwiLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYoJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnYWN0aXZlJykpe1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgIH1lbHNle1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);