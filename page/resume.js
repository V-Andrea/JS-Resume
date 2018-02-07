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
  getProjects: () => __WEBPACK_IMPORTED_MODULE_0__data__["c" /* projects */],
  getSkills: () => __WEBPACK_IMPORTED_MODULE_0__data__["d" /* skills */],
  getStudies: () => __WEBPACK_IMPORTED_MODULE_0__data__["b" /* education */]
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return education; });


let bio = {
  'firstName': 'Andrea',
  'lastName': 'Toth',
  'role': 'front-end developer',
  'profile': 'curious and enthusiastic young professional in the middle of a career change to be a thriving front-end developer.',
  'contacts': {
    'email': 'tothandrea.mail@gmail.com',
    'mobile': '+36307892850',
    'github': 'https://github.com/V-Andrea',
    'linkedin': 'https://www.linkedin.com/in/andrea-t%C3%B3th-1bbb5b77/',
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
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum sapien nec velit placerat cursus. Maecenas quis finibus velit. Curabitur viverra eros eu ultricies volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. In efficitur est sapien, sed malesuada lorem elementum vel. Aliquam pharetra, nibh eget tincidunt luctus, erat lorem gravida lectus, at faucibus elit tellus quis sapien. Etiam quis faucibus lorem. Sed imperdiet, ex sed efficitur ullamcorper, tortor nulla sodales diam, ut aliquet neque felis ultricies magna. Sed diam massa, scelerisque sed tortor eget, cursus pretium mi. Mauris et ultrices ipsum. Aliquam accumsan ligula eu urna euismod gravida. ',
    'github': 'https://github.com/V-Andrea',
    'image': '/img/unsplash.jpg'
  }, {
    'title': 'Edgy Fashion Prestashop Theme',
    'dates': '2016-2017',
    'description': 'Nulla eget imperdiet nisi. Proin dolor enim, pharetra non quam sit amet, molestie mattis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo at quam ultricies porttitor vel sed erat. Vivamus rutrum luctus scelerisque. Morbi eu mollis risus. Nulla mi nisi, pretium ac aliquam sit amet, malesuada et tortor. ',
    'github': 'https://github.com/V-Andrea',
    'image': '/img/ev-295467.jpg'
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

//event listeners and interactive scripts temporarily added here
// TODO: move to view

// Opening and closing the NAVBAR
// TODO: refactor the close into a function

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav_inner');
const close = document.querySelector('.closebtn');
const content = document.querySelector('.content');
const navLinks = Array.from(document.querySelectorAll('.nav_inner > a'));

burger.addEventListener('click', function (e) {
  nav.classList.add('open');
  e.stopPropagation();
  content.addEventListener('click', function (e) {
    nav.classList.remove('open');
    e.stopPropagation();
  });
});

close.addEventListener('click', function (e) {
  nav.classList.remove('open');
  e.stopPropagation();
});

navLinks.forEach(navlink => {
  navlink.addEventListener('click', function (e) {
    nav.classList.remove('open');
    e.stopPropagation();
  });
});

// Moving the title off screen by changing it's fixed position bottom vlaue

const moveTitle = e => {
  const title = document.querySelector('.title');
  const greeting = document.querySelector('.greeting');
  const bottomOfPage = window.scrollY + window.innerHeight;
  const bottomOfGreeting = greeting.offsetTop + greeting.clientHeight;
  const greetingBottomFromPageBottom = bottomOfPage - bottomOfGreeting;

  const titleHeight = window.getComputedStyle(title).getPropertyValue('height');
  const titleBottom = window.getComputedStyle(title).getPropertyValue('bottom');
  const bottomOfTitleNumber = parseFloat(titleBottom);
  const titleReachedGreetingEnd = bottomOfTitleNumber < greetingBottomFromPageBottom;
  console.log(bottomOfTitleNumber, greetingBottomFromPageBottom, titleReachedGreetingEnd);
  if (titleReachedGreetingEnd) {
    title.style.bottom = greetingBottomFromPageBottom + 'px';
  }
};

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    window.addEventListener('scroll', moveTitle);
  }
};

// slide-in effect for images

// debounce function (as taken from Underscore.js):
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const sliderImages = document.querySelectorAll('.slide-in');

const checkSlide = e => {
  sliderImages.forEach(sliderImage => {
    const bottomOfPage = window.scrollY + window.innerHeight;
    // image slides in when top half of it is supposed to be showing
    // i.e. that much above of the bottom of page
    const slideInAt = bottomOfPage - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = sliderImage.offsetTop < slideInAt;
    const isNotScrolledBy = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledBy) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', debounce(checkSlide));

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return view; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__control__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_hero__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_projects__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_proSkills__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templates_studies__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_softSkills__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__templates_statement__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__templates_contact__ = __webpack_require__(10);










let view = {
  init: () => {
    view.render();
  },
  render: () => {
    // getting the Resumé data
    let myBio = __WEBPACK_IMPORTED_MODULE_1__control__["a" /* control */].getBio();
    let myProjects = __WEBPACK_IMPORTED_MODULE_1__control__["a" /* control */].getProjects();
    let mySkills = __WEBPACK_IMPORTED_MODULE_1__control__["a" /* control */].getSkills();
    let myStudies = __WEBPACK_IMPORTED_MODULE_1__control__["a" /* control */].getStudies();

    /*
    Mapping each template string (generating function) to its corresponding data objects and
    the parent DOM element where it needs to be appended
    */
    let templateMap = new Map();
    templateMap.set(__WEBPACK_IMPORTED_MODULE_2__templates_hero__["a" /* createHero */], { dataOrigin: myBio, parentElement: 'hero' });
    templateMap.set(__WEBPACK_IMPORTED_MODULE_3__templates_projects__["a" /* addProjects */], { dataOrigin: myProjects, parentElement: 'projects' });
    templateMap.set(__WEBPACK_IMPORTED_MODULE_4__templates_proSkills__["a" /* addProSkills */], { dataOrigin: mySkills, parentElement: 'pro-skills' });
    templateMap.set(__WEBPACK_IMPORTED_MODULE_5__templates_studies__["a" /* addStudies */], { dataOrigin: myStudies, parentElement: 'studies' });
    templateMap.set(__WEBPACK_IMPORTED_MODULE_6__templates_softSkills__["a" /* addSoftSkills */], { dataOrigin: mySkills, parentElement: 'soft-skills' });
    templateMap.set(__WEBPACK_IMPORTED_MODULE_7__templates_statement__["a" /* addStatement */], { dataOrigin: myBio, parentElement: 'pro-statement' });
    templateMap.set(__WEBPACK_IMPORTED_MODULE_8__templates_contact__["a" /* addContacts */], { dataOrigin: myBio, parentElement: 'contact' });

    // generating a filled in template and appending the resulting html to the page
    templateMap.forEach((value, key, map) => {
      let parentDiv = document.getElementById(value.parentElement);
      let filledTemplate = key(value.dataOrigin);
      parentDiv.innerHTML = filledTemplate;
    });
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const createHero = data => `
    <div class="title">
      <h1 class="h1">${data.firstName} ${data.lastName}</h1>
    </div>
    <div class="greeting">
      <p>Hi, I'm ${data.firstName},</p>
      <strong>${data.role},</strong>
      <p>${data.profile}</p>
      <p>${data.welcomeMessage}</p>
    </div>
    `;
/* harmony export (immutable) */ __webpack_exports__["a"] = createHero;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const addProjects = data => `
  <h2 class="text-center">Projects</h2>
  <ul class="container">
    ${data.projects.map(project => `
    <li class="card">
      <img class="card-img" src="${project.image}">
      <div class="card-body">
        <h6 class="card-title">${project.title}</h6>
        <div class="date-text">${project.dates}</div>
        <p>${project.description}</p>
      </div>
      <div class="card-footer">
        <a target="_blank" href="Github">${project.github}</a>
      </div>
    </li>
    `).join('')}
  </ul>
  `;
/* harmony export (immutable) */ __webpack_exports__["a"] = addProjects;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const addProSkills = data => `
    <div class="col-33 text-area">
      <h2>Professional Skills</h2>
      <ul class="pro-skills">
        ${data.professional.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </div>
    <div class="col-67">
      <img class="slide-in slide-in_right" src="/img/autri-taheri-435297.jpg">
    </div>

    `;
/* harmony export (immutable) */ __webpack_exports__["a"] = addProSkills;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const addStudies = data => `
  <div class="card-group">

  <img class="card-group-bg-img" src="/img/artem-sapegin-180146.jpg">
    <h2 class="text-center">Studies</h2>
    <ul class="container">
      ${data.onlineCourses.map(course => `<li class="card">
        <div class="card-body">
          <h6 class="card-title">${course.title}</h6>
          <p>${course.school}</p>
          <div class="date-text">${course.dates}</div>
        </div>
        <div class="card-footer">
          <a class="class-link" target="_blank" href="${course.url}">Course page</a>
        </div>
      </li>`).join('')}
    </ul>
  </div>
  `;
/* harmony export (immutable) */ __webpack_exports__["a"] = addStudies;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const addSoftSkills = data => `
    <h2 class="text-center">Personal Skills</h2>
    <ul class="container">
      ${data.personal.map(skill => `<li>
        <svg class="circular-chart" viewbox="0 0 36 36">
            <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            <path class="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke-dasharray="${skill[1]}, 100" />
        </svg>
        <h6 class="text-center">${skill[0]}</h6>
      </li>`).join('')}
    </ul>
    `;
/* harmony export (immutable) */ __webpack_exports__["a"] = addSoftSkills;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const addStatement = data => `
    <div class="col-67">
      <img class="slide-in slide-in_left" src="/img/tim-mossholder-418237.jpg">
    </div>
    <div class="col-33 text-area">
      <h2 class="h2">Professional statement</h2>
      <p>${data.statement}</p>
    </div>
    `;
/* harmony export (immutable) */ __webpack_exports__["a"] = addStatement;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const addContacts = data => `
    <h2>Contact</h2>
    <ul class="container">
      <li>
        <a class="class-link" target="_blank" href="mailto:${data.contacts.email}">E-mail</a>
      </li>
      <li>
        <a class="class-link" target="_blank" href="${data.contacts.github}">Github</a>
      </li>
      <li>
        <a class="class-link" target="_blank" href="${data.contacts.linkedin}">LinkedIn</a>
      </li>
    </ul>
    `;
/* harmony export (immutable) */ __webpack_exports__["a"] = addContacts;


/***/ })
/******/ ]);