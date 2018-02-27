require('typeface-anton');
require('typeface-montserrat');
import '../scss/main.scss';
import {control} from './control';


// let's build the Resumé
control.init();

// event listeners and interactive scripts temporarily added here
// TODO: move to view

// Opening and closing the NAVBAR
// TODO: refactor the close into a function

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav_inner');
const close = document.querySelector('.closebtn');
const content = document.querySelector('.content');
const navLinks = Array.from(document.querySelectorAll('.nav_inner > a'));

burger.addEventListener('click', function(e) {
  nav.classList.add('open');
  e.stopPropagation();
  content.addEventListener('click', function(e){
    nav.classList.remove('open');
    e.stopPropagation();
  });
});

close.addEventListener('click', function(e) {
  nav.classList.remove('open');
  e.stopPropagation();
});

navLinks.forEach(navlink => {
  navlink.addEventListener('click', function(e) {
    nav.classList.remove('open');
    e.stopPropagation();
  });
});


// Moving the title off screen by changing it's fixed position to absolute

const moveTitle = e => {
  const windowHeight = window.innerHeight;
  const bottomOfPage = window.scrollY + windowHeight;
  const title = document.querySelector('.title');
  const greeting = document.querySelector('.greeting');

  const bottomOfGreeting = greeting.offsetTop + greeting.clientHeight + 10;
  const greetingBottomFromPageBottom = bottomOfPage - bottomOfGreeting;

  const titleBottom = (windowHeight - title.clientWidth) / 2;

  const titleReachedGreetingEnd = titleBottom < greetingBottomFromPageBottom;


  if (titleReachedGreetingEnd) {
    title.classList.add('absolute');
    title.classList.remove('fixed');

  } else {
    title.classList.add('fixed');
    title.classList.remove('absolute');
  }

}





// slide-in effect for images

// debounce function (as taken from Underscore.js):
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
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
    const slideInAt = bottomOfPage - (sliderImage.height / 2);
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


document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    window.addEventListener('scroll', moveTitle);
    window.addEventListener('scroll', debounce(checkSlide));
  }
};