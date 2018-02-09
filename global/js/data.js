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
    'dates' : '2017',
    'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum sapien nec velit placerat cursus. Maecenas quis finibus velit. Curabitur viverra eros eu ultricies volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. In efficitur est sapien, sed malesuada lorem elementum vel. Aliquam pharetra, nibh eget tincidunt luctus, erat lorem gravida lectus, at faucibus elit tellus quis sapien. Etiam quis faucibus lorem. Sed imperdiet, ex sed efficitur ullamcorper, tortor nulla sodales diam, ut aliquet neque felis ultricies magna. Sed diam massa, scelerisque sed tortor eget, cursus pretium mi. Mauris et ultrices ipsum. Aliquam accumsan ligula eu urna euismod gravida. ',
    'github' : 'https://github.com/V-Andrea',
    'image' : require('../img/unsplash.jpg')
  },
  {
    'title' : 'Edgy Fashion Prestashop Theme',
    'dates' : '2016-2017',
    'description' : 'Nulla eget imperdiet nisi. Proin dolor enim, pharetra non quam sit amet, molestie mattis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed justo at quam ultricies porttitor vel sed erat. Vivamus rutrum luctus scelerisque. Morbi eu mollis risus. Nulla mi nisi, pretium ac aliquam sit amet, malesuada et tortor. ',
    'github' : 'https://github.com/V-Andrea',
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
    'title' : 'Valami',
    'school' : 'Udacity',
    'dates' : '2017',
    'url' : 'valami'
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

