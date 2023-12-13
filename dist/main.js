/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ view)\n/* harmony export */ });\nfunction view (data) {\r\n  document.querySelector('.city').textContent = `${data.name}, ${data.country}`\r\n  document.querySelector('.temp').textContent = `${data.temp} °C`\r\n  document.querySelector('.feels-like').textContent = ` FEELS LIKE: ${data.feelLike} °C`\r\n  document.querySelector('.humidity').textContent = ` HUMIDITY: ${data.humidity} %`\r\n  document.querySelector('.wind').textContent = ` WIND: ${data.wind} km/h`\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/UI.js?");

/***/ }),

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateClock)\n/* harmony export */ });\nfunction updateClock() {\r\n  const clockElement = document.getElementById(\"clock\");\r\n  const currentTime = new Date();\r\n  const hours = currentTime.getHours();\r\n  const minutes = currentTime.getMinutes();\r\n  const seconds = currentTime.getSeconds();\r\n\r\n  const formattedTime = `${formatTime(hours)}:${formatTime(\r\n    minutes\r\n  )}:${formatTime(seconds)}`;\r\n  clockElement.textContent = formattedTime;\r\n}\r\n\r\nfunction formatTime(time) {\r\n  return time < 10 ? `0${time}` : time;\r\n}\r\n\r\n// export default function setTime(time) {\r\n//   const clockElement = document.getElementById(\"clock\");\r\n//   const timeNow = time;\r\n//   const currentTimestamp = new Date(timeNow * 1000);\r\n\r\n//   const hours = currentTimestamp.getUTCHours().toString().padStart(2,0);\r\n//   const minutes = currentTimestamp.getUTCMinutes().toString().padStart(2,0);\r\n//   const seconds = currentTimestamp.getUTCSeconds().toString().padStart(2,0);\r\n\r\n//   clockElement.textContent = `${hours}:${minutes}:${seconds}`\r\n\r\n//   console.log(clockElement.textContent)\r\n// }\r\n\n\n//# sourceURL=webpack://weather-app/./src/clock.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n\r\n// import setTime from './clock'\r\n\r\n\r\n(0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('tel aviv')\r\nconst form = document.querySelector('.input-text')\r\nform.value = 'Tel Aviv'\r\nconst submitBtn = document.querySelector('.submit-btn')\r\n\r\nsubmitBtn.addEventListener('click', function (e) {\r\n  e.preventDefault()\r\n  const city = form.value\r\n  ;(0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city)\r\n\r\n  // form.value = ''\r\n})\r\n\r\n\r\nsetInterval(_clock__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 1000);\r\n(0,_clock__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\nsetInterval(() => (0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(form.value), 1000);\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n\r\n\r\n\r\nasync function getData(city) {\r\n  const apiKey = \"9f434f090aae3ae45437f86f5ecd2a92\";\r\n  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;\r\n\r\n  let myData;\r\n\r\n  try {\r\n    const res = await fetch(`${apiUrl}&appid=${apiKey}`, { mode: \"cors\" });\r\n\r\n    if (!res.ok) {\r\n      console.error(`Failed to fetch data. Status: ${res.status}`);\r\n      return;\r\n    }\r\n\r\n    const data = await res.json();\r\n\r\n    myData = {\r\n      name: data.name,\r\n      country:data.sys.country,\r\n      temp: data.main.temp,\r\n      wind: data.wind.speed,\r\n      humidity: data.main.humidity,\r\n      feelLike: data.main.feels_like,\r\n      time: data.dt,\r\n    };\r\n\r\n    // setTime(myData.time)\r\n\r\n    (0,_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(myData);\r\n    // console.log(data);\r\n  } catch (error) {\r\n    console.error(error);\r\n  }\r\n\r\n  // return myData;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\r\n// document.querySelector(\".city\").textContent = data.name\r\n// document.querySelector(\".temp\").textContent = data.main.temp\r\n// document.querySelector(\".feels-like\").textContent = ` FEELS LIKE: ${data.main.feels_like}`\r\n// document.querySelector(\".humidity\").textContent = ` HUMIDITY: ${data.main.humidity} %`\r\n// document.querySelector(\".wind\").textContent = ` WIND: ${data.wind.speed} km/h`\r\n\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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