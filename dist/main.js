/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () =>{\n\n    class DisplayMountain{\n        constructor(){\n            this.canvas = document.getElementById(\"display-canvas\")\n            this.ctx = this.canvas.getContext('2d');\n            let slopeSlider = document.getElementById(\"slope\");\n            let slopeValue = slopeSlider.value;\n            this.slopeVal = Number.parseInt(slopeValue);\n            this.drawMountain();\n        }\n\n        drawMountain(){\n            let peak = this.canvas.height / 3;\n            this.ctx.beginPath();\n            this.ctx.moveTo(0, 2/3*this.canvas.height);\n            this.ctx.lineTo(this.canvas.width / 5, peak);\n            this.ctx.lineTo(-6*this.slopeVal+this.canvas.width, this.canvas.height);\n            this.ctx.lineTo(0, this.canvas.height);\n            this.ctx.fill();\n        }\n      \n    }\n\n    class DisplaySnow{\n        constructor(slopeVal) {\n            this.canvas = document.getElementById(\"display-canvas\")\n            this.ctx = this.canvas.getContext('2d');\n            let snowSlider = document.getElementById(\"snow\");\n            let snowValue = snowSlider.value;\n            this.snowVal = Number.parseInt(snowValue);\n            this.slopeVal = slopeVal\n            this.drawSnow();\n        }\n\n        drawSnow() {\n            let peak = this.canvas.height / 3;\n            this.ctx.beginPath();\n            this.ctx.moveTo(0, 2 / 3 * this.canvas.height - this.snowVal);\n            if (this.slopeVal > 70 && this.slopeVal <= 75) {\n                this.snowVal /= 1.5;\n                outofrange.style.display = \"block\";\n                wayoutofrange.style.display = \"none\";\n            }else if (this.slopeVal > 75 && this.slopeVal <= 80) {\n                this.snowVal /= 2;\n                outofrange.style.display = \"block\";\n                wayoutofrange.style.display = \"none\";\n            }else if (this.slopeVal > 80) {\n                wayoutofrange.style.display=\"block\";\n                outofrange.style.display = \"none\"\n                this.snowVal /= 2.5;\n            }else if (this.slopeVal < 30){\n                outofrange.style.display = \"block\"\n            }\n            else{\n                wayoutofrange.style.display = \"none\";\n                outofrange.style.display = \"none\"\n            }\n            this.ctx.lineTo(this.canvas.width / 5, peak - this.snowVal);\n            this.ctx.lineTo(-6 * this.slopeVal + this.canvas.width, this.canvas.height - this.snowVal);\n            this.ctx.stroke();\n        }\n    }\n\n    class DisplayWind{\n        constructor(){\n            this.canvas = document.getElementById(\"display-canvas\")\n            this.ctx = this.canvas.getContext('2d');\n            let windSlider = document.getElementById(\"windspeed\");\n            this.windValue = Number.parseInt(windSlider.value);\n            this.windArray = [];\n            this.x=0;\n            this.y=0\n            this.rotation = 0;\n            this.drawWind();\n            this.gravity=5;\n        }\n\n        drawWind(){\n            // let peak = this.canvas.height / 3;\n            let windSlider = document.getElementById(\"windspeed\");\n            this.windValue = Number.parseInt(windSlider.value);\n            // for(let i =0;i<this.windValue;i++){\n            //     this.ctx.beginPath();\n            //     this.ctx.moveTo(this.canvas.width / 5+this.x, peak+this.gravity-this.rotation*Math.random());\n            //     this.ctx.lineTo(this.canvas.width / 5 + this.windValue*10+this.x, Math.random()*(20) + peak-50+this.gravity+this.rotation)\n            //     this.ctx.stroke();\n            // }\n            // this.x+=this.windValue/10;\n            // if (this.x > 700){\n            //     this.x = 0;\n            // }\n            // if (this.y > this.canvas.height) {\n            //     this.y = 0;\n            // }\n            // this.gravity+=2;\n            // this.rotation+=1;\n            // this.y+=this.gravity;\n            debugger;\n            if (this.windValue > 10){\n                windloaded.style.display = \"block\";\n            }else{\n                windloaded.style.display = \"none\";\n            }\n        }\n    }\n\n\n    class DisplayPrecipitation{\n        \n    }\n\n    class DisplayCanvas {\n        constructor(){\n            this.canvas = document.getElementById(\"display-canvas\")\n            this.ctx = this.canvas.getContext('2d');\n            this.animate = this.animate.bind(this)\n            this.windCanvas = new DisplayWind;\n        }\n        animate(){\n            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n            let mountainCanvas = new DisplayMountain;\n            let snowCanvas = new DisplaySnow(mountainCanvas.slopeVal);\n            this.windCanvas.drawWind();\n            requestAnimationFrame(this.animate)\n        }\n    }\n    \n    \n    let displayCanvas = new DisplayCanvas;\n    displayCanvas.animate();\n    // let mountainCanvas = new displayMountain;\n    // mountainCanvas.animate();\n\n});\n\n//# sourceURL=webpack://JsProject/./src/index.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://JsProject/./src/styles/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;