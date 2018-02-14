export { bio, projects, skills, education };

let bio = {
  'firstName' : 'Andrea',
  'lastName' : 'Toth',
  'role' : 'front-end developer',
  'profile' : 'curious and enthusiastic young professional in the middle of a career change to be a thriving front-end developer.',
  'contacts' : {
    'email' : 'tothandrea.mail@gmail.com',
    'mobile' : '+36307892850',
    'github' : 'https://github.com/V-Andrea',
    'linkedin' : 'https://www.linkedin.com/in/andrea-t%C3%B3th-1bbb5b77/',
    'location' : 'Budapest'
  },
  'biopic' :'images/Andi.jpg' ,
  'statement' : 'Experiencing a 5+ years in B2B business operations specific roles I’ve realized I really should be coding. Being on maternity leave I’ve been and am learning the essentials of front end web development. Would like to obtain a position that will enable me to create exciting things and expand my knowledge.',
  'welcomeMessage' : 'You are looking at my site that is a 2in1 Resumé and reference project built using Vanilla Javascript (ES6, SASS, Webpack, Babel, Autoprefixer). Looks awesome, right?'
};

let projects = {
  'projects' : [
  {
    'title' : 'Resumé',
    'dates' : '2018',
    'description' : `Static website with my Resumé based one of the projects in Udacity's
                     Front-End Web Developer Nanodegree program and completely rewritten
                     with a basic MVC pattern in Vanilla Javascript using ES6, Webpack, Babel,
                     Autoprefixer, SCSS and of course HTML5. The object was to practice ES6
                     syntax and MVC pattern and modular build and showcase some of my current
                     knowledge in front-end development. Original project's repository can be found
                     here: https://github.com/udacity/frontend-nanodegree-resume `,
    'github' : 'https://github.com/V-Andrea/JS-Resume',
    'image' : require('../img/pineapple-supply-co_1200.jpg')
  },
  {
    'title' : 'Edgy Fashion Prestashop Theme',
    'dates' : '2016-2018',
    'description' : `Currently working on a theme for the open-source e-commerce software
                    Prestashop with focus on UX and a clean and edgy design. Using Bootstrap4,
                    SCSS, Bourbon, Smarty, Javascript.`,
    'github' : 'n/a',
    'image' : require('../img/ev-295467_1200.jpg')
  }
  ]
};

let skills = {
  'professional' : [
    'JavaScript ES6',
    'HTML/HTML5',
    'CSS3',
    'SCSS/SASS',
    'npm',
    'Git',
    'Webpack',
    'Bootstrap'
  ],
  'personal' : [
    ['communication', '90'],
    ['passion', '75'],
    ['proactivity', '85'],
    ['team-player', '70']
  ],
  'language' : [
    ['Hungarian', '100'],
    ['English', '80']
  ]
};

let education = {
  'schools' : [
  {
    'name' : 'Budapest Business School',
    'degree' : 'no final degree (pre-degree certificate stating that all courses have been passed)',
    'dates' : '2005-2008',
    'location' : 'Budapest',
    'majors' : ['Economy'],
    'url' : 'https://en.uni-bge.hu/cimb'
  },
  {
    'name' : 'Révai Miklós Secondary Grammar School',
    'degree' : 'high school diploma',
    'dates' : '2001-2005',
    'location' : 'Győr',
    'majors' : ['Informatics'],
    'url' : 'http://www.revai.hu/'
  }],
  'onlineCourses' : [
  {
    'title' : 'ES6 - JavaScript Improved',
    'school' : 'Udacity',
    'dates' : '2018',
    'url' : 'https://eu.udacity.com/course/es6-javascript-improved--ud356'
  },
  {
    'title' : 'Offline Web Applications',
    'school' : 'Udacity',
    'dates' : '2018',
    'url' : 'https://eu.udacity.com/course/offline-web-applications--ud899'
  },
  {
    'title' : 'JavaScript Design Patterns',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'https://eu.udacity.com/course/javascript-design-patterns--ud989'
  },
  {
    'title' : 'Intro to AJAX',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'https://eu.udacity.com/course/intro-to-ajax--ud110'
  },
  {
    'title' : 'Website Performance Optimization',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'https://eu.udacity.com/course/website-performance-optimization--ud884'
  },
  {
    'title' : 'Browser Rendering Optimization',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'https://eu.udacity.com/course/browser-rendering-optimization--ud860'
  },
  {
    'title' : 'HTML5 Canvas',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'https://eu.udacity.com/course/html5-canvas--ud292'
  },
  {
    'title' : 'Object-Oriented JavaScript',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'https://eu.udacity.com/course/object-oriented-javascript--ud015'
  },
  {
    'title' : 'Intro to jQuery',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'https://www.udacity.com/course/intro-to-jquery--ud245'
  },
  {
    'title' : 'JavaScript Basics',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'https://www.udacity.com/course/javascript-basics--ud804'
  },
  {
    'title' : 'Responsive Images',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'https://www.udacity.com/course/responsive-images--ud882'
  },
  {
    'title' : 'Responsive Web Design Fundamentals',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
  },
  {
    'title' : 'Intro to HTML and CSS',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
  }
  ]
};

