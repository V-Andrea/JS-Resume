import {control} from './control';


// let's build the Resumé
control.init();

//event listeners and interactive scripts temporarily added here
// TODO: move to view
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