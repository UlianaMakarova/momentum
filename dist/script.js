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

/***/ "./src/js/ClockSettings.js":
/*!*********************************!*\
  !*** ./src/js/ClockSettings.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Clock\": () => (/* binding */ Clock)\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nclass Clock {\n  constructor() {\n    let langSetting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';\n    let timer = arguments.length > 1 ? arguments[1] : undefined;\n    _defineProperty(this, \"setTimer\", () => {\n      setTimeout(this.showTime, this.timer);\n    });\n    _defineProperty(this, \"getCurrentData\", () => {\n      const options = {\n        weekday: 'long',\n        month: 'long',\n        day: 'numeric'\n      };\n      const date = new Date();\n      this.currentTime = date.toLocaleTimeString();\n      this.currentDate = date.toLocaleDateString(this.langSetting, options);\n    });\n    _defineProperty(this, \"showTime\", () => {\n      const time_block = document.querySelector('.time');\n      const date_block = document.querySelector('.date');\n      this.getCurrentData();\n      time_block.innerHTML = this.currentTime;\n      date_block.innerHTML = this.currentDate;\n      this.setTimer();\n      const greeting_block = document.querySelector('.greeting');\n      this.currentPartOfDay = this.showGreeting();\n      greeting_block.textContent = this.currentPartOfDay;\n    });\n    _defineProperty(this, \"getTimeOfDay\", () => {\n      const dayParts = {\n        'en-US': ['morning', 'afternoon', 'evening', 'night'],\n        'ru-RU': ['утро', 'день', 'вечер', 'ночь']\n      };\n      const date = new Date();\n      const hours = date.getHours();\n      return dayParts[this.langSetting][Math.floor(hours / 6) - 1];\n    });\n    _defineProperty(this, \"showGreeting\", () => {\n      const greetingContainer = {\n        'en-US': 'Good',\n        'ru-RU': 'Добрый'\n      };\n      return this.getTimeOfDay() === 'утро' ? 'Доброе утро' : `${greetingContainer[this.langSetting]} ${this.getTimeOfDay()}`;\n    });\n    this.langSetting = langSetting;\n    this.currentPartOfDay = '';\n    this.timer = timer;\n    this.currentTime = '';\n    this.currentDate = '';\n    this.showTime();\n  }\n}\n\n//# sourceURL=webpack://momentum/./src/js/ClockSettings.js?");

/***/ }),

/***/ "./src/js/Language.js":
/*!****************************!*\
  !*** ./src/js/Language.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Lang\": () => (/* binding */ Lang)\n/* harmony export */ });\n/* harmony import */ var _ClockSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClockSettings */ \"./src/js/ClockSettings.js\");\n/* harmony import */ var _QuotesSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuotesSettings */ \"./src/js/QuotesSettings.js\");\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nclass Lang {\n  constructor() {\n    let langSetting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';\n    _defineProperty(this, \"change\", () => {\n      this.container.textContent = this.languages.indexOf(this.container.textContent) === this.languages.length - 1 ? this.languages[0] : this.languages[this.languages.indexOf(this.container.textContent) + 1];\n      this.langSetting = this.container.textContent;\n\n      //city.value = cityDefaultList[langList.indexOf(langSetting)];\n    });\n    _defineProperty(this, \"getCurrentLanguage\", () => {\n      return this.langSetting;\n    });\n    this.languages = ['en-US', 'ru-RU'];\n    this.langSetting = langSetting;\n    this.container = document.querySelector('.lang');\n  }\n}\n\n//# sourceURL=webpack://momentum/./src/js/Language.js?");

/***/ }),

/***/ "./src/js/PlayList.js":
/*!****************************!*\
  !*** ./src/js/PlayList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst playList = [{\n  title: 'Aqua Caelestis',\n  src: 'src/assets/sounds/Aqua Caelestis.mp3',\n  duration: '00:58'\n}, {\n  title: 'River Flows In You',\n  src: 'src/assets/sounds/River Flows In You.mp3',\n  duration: '03:50'\n}, {\n  title: 'Ennio Morricone',\n  src: 'src/assets/sounds/Ennio Morricone.mp3',\n  duration: '01:37'\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playList);\n\n//# sourceURL=webpack://momentum/./src/js/PlayList.js?");

/***/ }),

/***/ "./src/js/QuotesSettings.js":
/*!**********************************!*\
  !*** ./src/js/QuotesSettings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Quotes\": () => (/* binding */ Quotes)\n/* harmony export */ });\nclass Quotes {\n  constructor(langSetting, numRandom) {\n    this.langSetting = langSetting;\n    this.number = numRandom;\n    this.quote = document.querySelector('.quote');\n    this.author = document.querySelector('.author');\n    this.getQuotes();\n  }\n  async getQuotes() {\n    const quotes = 'src/assets/data.json';\n    const res = await fetch(quotes);\n    const data = await res.json();\n    this.quote.textContent = data[this.number][this.langSetting].text;\n    this.author.textContent = data[this.number][this.langSetting].author;\n  }\n}\n\n//# sourceURL=webpack://momentum/./src/js/QuotesSettings.js?");

/***/ }),

/***/ "./src/js/cityAndWeatherSettings.js":
/*!******************************************!*\
  !*** ./src/js/cityAndWeatherSettings.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Weather\": () => (/* binding */ Weather)\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nlet cityDefaultList = ['Minsk', 'Минск'];\nlet citySetting = cityDefaultList[0];\nconst weatherIcon = document.querySelector('.weather-icon');\nconst weatherDescription = document.querySelector('.weather-description');\nconst temperature = document.querySelector('.temperature');\nclass Weather {\n  constructor() {\n    let langSetting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';\n    let city = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Minsk';\n    _defineProperty(this, \"setCity\", event => {\n      if (event.code === 'Enter') {\n        this.getWeather();\n        this.cityContainer.blur();\n      }\n    });\n    _defineProperty(this, \"setLocalStorage\", () => {\n      localStorage.setItem('city', this.cityContainer.value);\n    });\n    this.langSetting = langSetting;\n    this.city = city;\n    this.cityContainer = document.querySelector('.city');\n  }\n  getLocalStorage() {\n    console.log('getLocalStorage');\n    if (localStorage.getItem('city')) {\n      this.cityContainer.value = localStorage.getItem('city');\n      this.city = this.cityContainer.value;\n      console.log('load city:' + this.cityContainer.value);\n      this.getWeather();\n    }\n  }\n  async getWeather() {\n    console.log('weather:' + this.cityContainer.value);\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityContainer.value}&lang=${this.langSetting.split('-')[0]}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;\n    const res = await fetch(url);\n    const data = await res.json();\n    console.log(data);\n    if (data.cod !== 200) {\n      this.cityContainer.value = '';\n      weatherIcon.className = '';\n      temperature.textContent = 'Type correct city name, please';\n      weatherDescription.textContent = '';\n    } else {\n      weatherIcon.className = 'weather-icon owf';\n      weatherIcon.classList.add(`owf-${data.weather[0].id}`);\n      temperature.textContent = `${data.main.temp}°C`;\n      weatherDescription.textContent = data.weather[0].description;\n    }\n  }\n}\n\n//# sourceURL=webpack://momentum/./src/js/cityAndWeatherSettings.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PlayList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayList */ \"./src/js/PlayList.js\");\n\nlet isPlay = false;\nlet playNum = 0;\nconst playerBtn = document.querySelector('.play');\nconst playNextBtn = document.querySelector('.play-next');\nconst playPrevBtn = document.querySelector('.play-prev');\nconst playListContainer = document.querySelector('.play-list');\nconst audio = new Audio();\nfunction toggleBtn() {\n  isPlay ? pauseAudio() : playAudio();\n  playerBtn.classList.toggle('pause');\n}\nplayerBtn.addEventListener('click', toggleBtn);\nfunction playAudio() {\n  isPlay = true;\n  audio.src = _PlayList__WEBPACK_IMPORTED_MODULE_0__[\"default\"][playNum].src;\n  _PlayList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((el, index) => {\n    playListContainer.children[index].classList.remove('item-active');\n  });\n  playListContainer.children[playNum].classList.add('item-active');\n  audio.currentTime = 0;\n  audio.play();\n}\naudio.addEventListener(\"ended\", playNext);\nfunction pauseAudio() {\n  audio.pause();\n  isPlay = false;\n}\n_PlayList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(el => {\n  const li = document.createElement('li');\n  li.classList.add('play-item');\n  li.textContent = el.title;\n  playListContainer.append(li);\n});\nfunction playNext() {\n  playNum = playNum === _PlayList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length - 1 ? 0 : playNum + 1;\n  playAudio();\n}\nplayNextBtn.addEventListener('click', playNext);\nfunction playPrev() {\n  playNum = playNum === 0 ? _PlayList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length - 1 : playNum - 1;\n  playAudio();\n}\nplayPrevBtn.addEventListener('click', playPrev);\n\n//# sourceURL=webpack://momentum/./src/js/player.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Language */ \"./src/js/Language.js\");\n/* harmony import */ var _ClockSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClockSettings */ \"./src/js/ClockSettings.js\");\n/* harmony import */ var _cityAndWeatherSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityAndWeatherSettings */ \"./src/js/cityAndWeatherSettings.js\");\n/* harmony import */ var _QuotesSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuotesSettings */ \"./src/js/QuotesSettings.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n\n\n\n\n\nlet randomNum = 0;\nconst reload = document.querySelector('.change-quote');\nwindow.onload = function () {\n  const language = new _Language__WEBPACK_IMPORTED_MODULE_0__.Lang();\n  const clock = new _ClockSettings__WEBPACK_IMPORTED_MODULE_1__.Clock(language.langSetting, 1000);\n  const quote = new _QuotesSettings__WEBPACK_IMPORTED_MODULE_3__.Quotes(language.langSetting, getRandomNum(0, 2, 'quote'));\n  const weather = new _cityAndWeatherSettings__WEBPACK_IMPORTED_MODULE_2__.Weather(language.langSetting);\n  //\n\n  language.container.addEventListener('click', event => {\n    language.change();\n    clock.langSetting = language.langSetting;\n    quote.langSetting = language.langSetting;\n    quote.getQuotes();\n    weather.langSetting = language.langSetting;\n    weather.getWeather();\n  });\n  reload.addEventListener('click', event => {\n    new _QuotesSettings__WEBPACK_IMPORTED_MODULE_3__.Quotes(language.langSetting, getRandomNum(0, 2, 'quote'));\n  });\n  weather.getLocalStorage();\n  setBackgroundImage(clock.currentPartOfDay);\n  document.querySelector('.slide-next').addEventListener('click', getSlideNext);\n  document.querySelector('.slide-prev').addEventListener('click', getSlidePrev);\n  document.addEventListener('DOMContentLoaded', () => {\n    weather.getWeather();\n  });\n  weather.cityContainer.addEventListener('keypress', event => {\n    weather.setCity(event);\n  });\n  // window.addEventListener('onload', ()=>{\n  //   weather.getLocalStorage();\n  // });\n  window.addEventListener('beforeunload', () => {\n    weather.setLocalStorage();\n  });\n};\nconst getRandomNum = (min, max, mode) => {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  if (mode === 'slider') randomNum = Math.floor(Math.random() * (max - min + 1)) + min;else return Math.floor(Math.random() * (max - min + 1)) + min;\n};\nconst setBackgroundImage = timeOfDay => {\n  //const timeOfDay = getTimeOfDay(langSetting);\n  console.log(timeOfDay);\n  if (randomNum === 0) getRandomNum(1, 20, 'slider');\n  const img = new Image();\n  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay.split(' ')[1]}/${randomNum.toString().padStart(2, '0')}.jpg`;\n  img.onload = () => {\n    const body = document.querySelector('body');\n    body.style.backgroundImage = `url('${img.src}')`;\n  };\n};\nconst getSlideNext = () => {\n  randomNum = randomNum === 20 ? 1 : randomNum + 1;\n  setBackgroundImage();\n};\nconst getSlidePrev = () => {\n  randomNum = randomNum === 1 ? 20 : randomNum - 1;\n  setBackgroundImage();\n};\n\n// function setLocalStorage() {\n//     const name = document.querySelector('.name');\n//     localStorage.setItem('name', name.value);\n//   };\n// window.addEventListener('beforeunload', setLocalStorage);\n\n// function getLocalStorage() {\n//     if(localStorage.getItem('name')) {\n//       const name = document.querySelector('.name');\n//       name.value = localStorage.getItem('name');\n//     }\n//   };\n//   window.addEventListener('onload', getLocalStorage);\n\n//# sourceURL=webpack://momentum/./src/js/script.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://momentum/./src/sass/style.scss?");

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
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/style.scss");
/******/ 	
/******/ })()
;