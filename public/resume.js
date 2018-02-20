!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(1),i=n(8);let s={init:()=>{i.a.init()},getBio:()=>a.a,getProjects:()=>a.c,getSkills:()=>a.d,getStudies:()=>a.b}},function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return s}),n.d(t,"b",function(){return o});let a={firstName:"Andrea",lastName:"Toth",role:"front-end developer",profile:"curious and enthusiastic young professional in the middle of a career change to be a thriving front-end developer.",contacts:{email:"tothandrea.mail@gmail.com",mobile:"+36307892850",github:"https://github.com/V-Andrea",linkedin:"https://www.linkedin.com/in/andrea-t%C3%B3th-1bbb5b77/",location:"Budapest"},biopic:"images/Andi.jpg",motto:{text:'"Whatever the mind can concieve and believe, it can achive"',author:"Napoleon Hill"},statement:"Experiencing a 5+ years in B2B business operations specific roles I’ve realized I really should be coding. Being on maternity leave I’ve been and am learning the essentials of front end web development. Would like to obtain a position that will enable me to create exciting things and expand my knowledge.",welcomeMessage:"You are looking at my site that is a 2in1 Resumé and reference project built using Vanilla Javascript (ES6, SASS, Webpack, Babel, Autoprefixer). Looks awesome, right?"},i={projects:[{title:"Resumé",dates:"2018",description:"Static website with my Resumé based one of the projects in Udacity's\n                     Front-End Web Developer Nanodegree program and completely rewritten\n                     with a basic MVC pattern in Vanilla Javascript using ES6, Webpack, Babel,\n                     Autoprefixer, SCSS and of course HTML5. The object was to practice ES6\n                     syntax and MVC pattern and modular build and showcase some of my current\n                     knowledge in front-end development. Original project's repository can be found\n                     here: https://github.com/udacity/frontend-nanodegree-resume ",github:"https://github.com/V-Andrea/JS-Resume",image:n(6)},{title:"Edgy Fashion Prestashop Theme",dates:"2016-2018",description:"Currently working on a theme for the open-source e-commerce software\n                    Prestashop with focus on UX and a clean and edgy design. Using Bootstrap4,\n                    SCSS, Bourbon, Smarty, Javascript.",github:"n/a",image:n(7)}]},s={professional:["JavaScript ES6","HTML/HTML5","CSS3","SCSS/SASS","npm","Git","Webpack","Bootstrap"],personal:[["communication","90"],["passion","75"],["proactivity","85"],["team-player","70"]],language:[["Hungarian","100"],["English","80"]]},o={schools:[{name:"Budapest Business School",degree:"no final degree (pre-degree certificate stating that all courses have been passed)",dates:"2005-2008",location:"Budapest",majors:["Economy"],url:"https://en.uni-bge.hu/cimb"},{name:"Révai Miklós Secondary Grammar School",degree:"high school diploma",dates:"2001-2005",location:"Győr",majors:["Informatics"],url:"http://www.revai.hu/"}],onlineCourses:[{title:"ES6 - JavaScript Improved",school:"Udacity",dates:"2018",url:"https://eu.udacity.com/course/es6-javascript-improved--ud356"},{title:"Offline Web Applications",school:"Udacity",dates:"2018",url:"https://eu.udacity.com/course/offline-web-applications--ud899"},{title:"JavaScript Design Patterns",school:"Udacity",dates:"2017",url:"https://eu.udacity.com/course/javascript-design-patterns--ud989"},{title:"Intro to AJAX",school:"Udacity",dates:"2017",url:"https://eu.udacity.com/course/intro-to-ajax--ud110"},{title:"Website Performance Optimization",school:"Udacity",dates:"2017",url:"https://eu.udacity.com/course/website-performance-optimization--ud884"},{title:"Browser Rendering Optimization",school:"Udacity",dates:"2017",url:"https://eu.udacity.com/course/browser-rendering-optimization--ud860"},{title:"HTML5 Canvas",school:"Udacity",dates:"2017",url:"https://eu.udacity.com/course/html5-canvas--ud292"},{title:"Object-Oriented JavaScript",school:"Udacity",dates:"2017",url:"https://eu.udacity.com/course/object-oriented-javascript--ud015"},{title:"Intro to jQuery",school:"Udacity",dates:"2017",url:"https://www.udacity.com/course/intro-to-jquery--ud245"},{title:"JavaScript Basics",school:"Udacity",dates:"2017",url:"https://www.udacity.com/course/javascript-basics--ud804"},{title:"Responsive Images",school:"Udacity",dates:"2017",url:"https://www.udacity.com/course/responsive-images--ud882"},{title:"Responsive Web Design Fundamentals",school:"Udacity",dates:"2017",url:"https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"},{title:"Intro to HTML and CSS",school:"Udacity",dates:"2017",url:"https://www.udacity.com/course/intro-to-html-and-css--ud304"}]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),i=(n.n(a),n(0));n(3),n(4),i.a.init();const s=document.querySelector(".burger"),o=document.querySelector(".nav_inner"),r=document.querySelector(".closebtn"),c=document.querySelector(".content"),l=Array.from(document.querySelectorAll(".nav_inner > a"));s.addEventListener("click",function(e){o.classList.add("open"),e.stopPropagation(),c.addEventListener("click",function(e){o.classList.remove("open"),e.stopPropagation()})}),r.addEventListener("click",function(e){o.classList.remove("open"),e.stopPropagation()}),l.forEach(e=>{e.addEventListener("click",function(e){o.classList.remove("open"),e.stopPropagation()})});const d=e=>{const t=window.scrollY+window.innerHeight,n=document.querySelector(".title"),a=document.querySelector(".greeting"),i=t-(a.offsetTop+a.clientHeight),s=window.getComputedStyle(n).getPropertyValue("bottom");parseFloat(s)<i?(n.classList.add("absolute"),n.classList.remove("fixed")):(n.classList.add("fixed"),n.classList.remove("absolute"))};const u=document.querySelectorAll(".slide-in"),p=e=>{u.forEach(e=>{const t=window.scrollY+window.innerHeight-e.height/2,n=e.offsetTop+e.height,a=e.offsetTop<t,i=window.scrollY<n;a&&i?e.classList.add("active"):e.classList.remove("active")})};document.onreadystatechange=(()=>{"complete"===document.readyState&&(window.addEventListener("scroll",d),window.addEventListener("scroll",function(e,t=20,n=!0){var a;return function(){var i=this,s=arguments,o=n&&!a;clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(i,s)},t),o&&e.apply(i,s)}}(p)))})},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){e.exports=n.p+"img/pineapple-supply-co_1200.jpg"},function(e,t,n){e.exports=n.p+"img/ev-295467_1200.jpg"},function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(1);var a=n(0),i=n(9),s=n(10),o=n(11),r=n(16),c=n(21),l=n(26),d=n(27),u=n(28);let p={init:()=>{p.render()},render:()=>{let e=a.a.getBio(),t=a.a.getProjects(),n=a.a.getSkills(),p=a.a.getStudies(),m=new Map;m.set(i.a,{dataOrigin:e,parentElement:"hero"}),m.set(s.a,{dataOrigin:t,parentElement:"projects"}),m.set(o.a,{dataOrigin:e,parentElement:"motto"}),m.set(r.a,{dataOrigin:n,parentElement:"pro-skills"}),m.set(c.a,{dataOrigin:p,parentElement:"studies"}),m.set(l.a,{dataOrigin:n,parentElement:"soft-skills"}),m.set(d.a,{dataOrigin:e,parentElement:"pro-statement"}),m.set(u.a,{dataOrigin:e,parentElement:"contact"}),m.forEach((e,t,n)=>{let a=document.getElementById(e.parentElement),i=t(e.dataOrigin);a.innerHTML=i})}}},function(e,t,n){"use strict";t.a=(e=>`\n    <div class="title fixed">\n      <h1 class="h1">${e.firstName} ${e.lastName}</h1>\n    </div>\n    <div class="greeting">\n      <p>Hi, I'm ${e.firstName},</p>\n      <strong>${e.role},</strong>\n      <p>${e.profile}</p>\n      <p>${e.welcomeMessage}</p>\n    </div>\n    `)},function(e,t,n){"use strict";t.a=(e=>`\n  <h2 class="text-center">Projects</h2>\n  <ul class="container">\n    ${e.projects.map(e=>`\n    <li class="card">\n      <img class="card-img" src="${e.image}">\n      <div class="card-body">\n        <h6 class="card-title">${e.title}</h6>\n        <div class="date-text">${e.dates}</div>\n        <p>${e.description}</p>\n      </div>\n      <div class="card-footer">\n        <a target="_blank" href="Github">${e.github}</a>\n      </div>\n    </li>\n    `).join("")}\n  </ul>\n  `)},function(e,t,n){"use strict";t.a=(e=>`\n    <div class="col-67  hidden-md">\n      <img\n        class="slide-in slide-in_left"\n        srcset="${n(12)} 1500vw, ${n(13)}, 900vw ${n(14)} 600vw"\n        src="${n(15)}"\n        alt="Vivid green plant with magenta background">\n    </div>\n    <div class="col-33 text-area">\n      <h2 class="h2 text-center">Motto</h2>\n      <blockquote class="text-center">${e.motto.text}</blockquote>\n      <p class="text-center">${e.motto.author}</p>\n    </div>\n    `)},function(e,t,n){e.exports=n.p+"img/tim-mossholder_1800.jpg"},function(e,t,n){e.exports=n.p+"img/tim-mossholder_1200.jpg"},function(e,t,n){e.exports=n.p+"img/tim-mossholder_900.jpg"},function(e,t,n){e.exports=n.p+"img/tim-mossholder_600.jpg"},function(e,t,n){"use strict";t.a=(e=>`\n    <div class="col-33 text-area">\n      <h2>Professional Skills</h2>\n      <ul class="pro-skills">\n        ${e.professional.map(e=>`<li>${e}</li>`).join("")}\n      </ul>\n    </div>\n    <div class="col-67 hidden-md">\n      <img\n        class="slide-in slide-in_right"\n        srcset="${n(17)} 1500vw, ${n(18)}, 900vw ${n(19)} 600vw"\n        src="${n(20)}" alt="Raw sugar on spoon">\n    </div>\n\n    `)},function(e,t,n){e.exports=n.p+"img/autri-taheri_1800.jpg"},function(e,t,n){e.exports=n.p+"img/autri-taheri_1200.jpg"},function(e,t,n){e.exports=n.p+"img/autri-taheri_900.jpg"},function(e,t,n){e.exports=n.p+"img/autri-taheri_600.jpg"},function(e,t,n){"use strict";t.a=(e=>`\n  <div class="card-group">\n    <img\n      class="card-group-bg-img"\n      srcset="${n(22)} 1500vw, ${n(23)}, 900vw ${n(24)} 600vw"\n      src="${n(25)}"\n      alt="Laptop and coffeemug on a table">\n    <h2 class="text-center">Studies</h2>\n    <ul class="container">\n      ${e.onlineCourses.map(e=>`<li class="card">\n        <div class="card-body">\n          <h6 class="card-title">${e.title}</h6>\n          <p>${e.school}</p>\n          <div class="date-text">${e.dates}</div>\n        </div>\n        <div class="card-footer">\n          <a class="class-link" target="_blank" href="${e.url}">Course page</a>\n        </div>\n      </li>`).join("")}\n    </ul>\n  </div>\n  `)},function(e,t,n){e.exports=n.p+"img/artem-sapegin_1800.jpg"},function(e,t,n){e.exports=n.p+"img/artem-sapegin_1200.jpg"},function(e,t,n){e.exports=n.p+"img/artem-sapegin_900.jpg"},function(e,t,n){e.exports=n.p+"img/artem-sapegin_600.jpg"},function(e,t,n){"use strict";t.a=(e=>`\n    <h2 class="text-center">Personal Skills</h2>\n    <ul class="container">\n      ${e.personal.map(e=>`<li>\n        <svg class="circular-chart" viewbox="0 0 36 36">\n            <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>\n            <path class="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke-dasharray="${e[1]}, 100" />\n        </svg>\n        <h6 class="text-center">${e[0]}</h6>\n      </li>`).join("")}\n    </ul>\n    `)},function(e,t,n){"use strict";t.a=(e=>`\n    <h2 class="text-center">Professional statement</h2>\n    <p>${e.statement}</p>\n    `)},function(e,t,n){"use strict";t.a=(e=>`\n    <h2>Contact</h2>\n    <ul class="container">\n      <li>\n        <a class="class-link" target="_blank" href="mailto:${e.contacts.email}">E-mail</a>\n      </li>\n      <li>\n        <a class="class-link" target="_blank" href="${e.contacts.github}">Github</a>\n      </li>\n      <li>\n        <a class="class-link" target="_blank" href="${e.contacts.linkedin}">LinkedIn</a>\n      </li>\n    </ul>\n    `)}]);