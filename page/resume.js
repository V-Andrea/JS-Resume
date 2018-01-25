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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return control; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(3);



let control = {
  init: () => {
    __WEBPACK_IMPORTED_MODULE_1__view__["a" /* view */].init();
  },
  getBio: () => __WEBPACK_IMPORTED_MODULE_0__data__["a" /* bio */],
  getProjects: () => __WEBPACK_IMPORTED_MODULE_0__data__["b" /* projects */]
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return projects; });
/* unused harmony export skills */
/* unused harmony export education */


let bio = {
  'firstName': 'Andrea',
  'lastName': 'Toth',
  'role': 'front-end developer',
  'profile': 'Curious and enthusiastic young professional in the middle of a career change to be a thriving front-end developer.',
  'contacts': {
    'email': 'tothandrea.mail@gmail.com',
    'mobile': '+36307892850',
    'github': 'VAndrea',
    'location': 'Budapest'
  },
  'biopic': 'images/Andi.jpg',
  'statement': 'Experiencing a 5+ years in B2B business operations specific roles I’ve realized I really should be coding. Being on maternity leave I’ve been and am learning the essentials of front end web development. Would like to obtain a position that will enable me to create exciting things and expand my knowledge.',
  'welcomeMessage': 'You are looking at my site that is a 2in1 Resumé and reference project built using Vanilla Javascript (ES6, SASS, Webpack, Babel, Autoprefixer). Looks awesome, right?'
};

let projects = {
  'projects': [{
    'title': 'Resumé',
    'dates': '2017',
    'description': 'this',
    'images': ['images/197x148.gif', 'images/197x148.gif']
  }, {
    'title': 'Edgy Fashion Prestashop Theme',
    'dates': '2016-2017',
    'description': 'that',
    'images': ['images/197x148.gif', 'images/197x148.gif']
  }]
};

let skills = {
  'professional': ['JavaScript ES6', 'HTML/HTML5', 'CSS3', 'SCSS/SASS', 'npm', 'Git', 'Webpack', 'Bootstrap'],
  'personal': [['communication', '90'], ['passion', '75'], ['proactivity', '85'], ['team-player', '70']],
  'language': [['Hungarian', '100'], ['English', '80']]
};

let education = {
  'schools': [{
    'name': 'Budapest Business School',
    'degree': 'no final degree (pre-degree certificate stating that all courses have been passed)',
    'dates': '2005-2008',
    'location': 'Budapest',
    'majors': ['Economy'],
    'url': 'https://en.uni-bge.hu/cimb'
  }, {
    'name': 'Révai Miklós Secondary Grammar School',
    'degree': 'high school diploma',
    'dates': '2001-2005',
    'location': 'Győr',
    'majors': ['Informatics'],
    'url': 'http://www.revai.hu/'
  }],
  'onlineCourses': [{
    'title': 'Valami',
    'school': 'Udacity',
    'dates': '2017',
    'url': 'valami'
  }, {
    'title': 'Intro to jQuery',
    'school': 'Udacity',
    'dates': '2017',
    'url': 'https://www.udacity.com/course/intro-to-jquery--ud245'
  }, {
    'title': 'JavaScript Basics',
    'school': 'Udacity',
    'dates': '2017',
    'url': 'https://www.udacity.com/course/javascript-basics--ud804'
  }, {
    'title': 'Responsive Images',
    'school': 'Udacity',
    'dates': '2017',
    'url': 'https://www.udacity.com/course/responsive-images--ud882'
  }, {
    'title': 'Responsive Web Design Fundamentals',
    'school': 'Udacity',
    'dates': '2017',
    'url': 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
  }, {
    'title': 'Intro to HTML and CSS',
    'school': 'Udacity',
    'dates': '2017',
    'url': 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
  }]
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__control__ = __webpack_require__(0);


// let's build the Resumé
__WEBPACK_IMPORTED_MODULE_0__control__["a" /* control */].init();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return view; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_hero__ = __webpack_require__(4);




let view = {
  init: () => {
    view.render();
  },
  render: () => {
    // TODO: add complete render functionality
    let myBio = __WEBPACK_IMPORTED_MODULE_1__control__["a" /* control */].getBio();
    let myHero = Object(__WEBPACK_IMPORTED_MODULE_2__templates_hero__["a" /* createHero */])(myBio);
    let heroElement = document.querySelector('.hero');
    heroElement.innerHTML = myHero;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const createHero = data => `
    <h1 class="h1">${data.firstName} ${data.lastName}</h1>
    <p>Hi, I'm ${data.firstName},</p>
    <strong>${data.role},</strong>
    <p>currently looking for a job.</p>
    <p>${data.welcomeMessage}</p>
    `;
/* harmony export (immutable) */ __webpack_exports__["a"] = createHero;


/***/ })
/******/ ]);