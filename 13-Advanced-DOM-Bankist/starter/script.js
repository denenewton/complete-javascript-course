'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////////////////////////
//Scroll To sectioin 1

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section__1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', () => {
  section__1.scrollIntoView({
    behavior: 'smooth'
  });
});

///////////////////////
//Scrolling to link of the nav

/* document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    const section = document.querySelector(id);
    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
 */
// delegation event, because perform better.
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  const link = e.target;
  const id = link.getAttribute('href');

  if (link.classList.contains('nav__link')) {
    const section = document.querySelector(id);
    section.scrollIntoView({
      behavior: 'smooth'
    });
  }
});

/* /// Title select

const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'blue';

///parents
console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest('.header'));

/// siblins
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);
 */

/////////////////////////////
//Tab contentes
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const tabConatainer = document.querySelector('.operations__tab-container');

//console.log(tabConatainer);
//console.log(tabsContent);

tabConatainer.addEventListener('click', e => {
  const cliked = e.target.closest('.operations__tab');
  //Gard claus
  if (!cliked) return;
  // Add class actived
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  cliked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  const contentCliked = document.querySelector(
    `.operations__content--${cliked.dataset.tab}`
  );
  contentCliked.classList.add('operations__content--active');

  /* if (cliked.classList.contains('operations__tab')) {
    console.log(cliked);
  } */
});
/////////////////////////
// Menu fade animation
const nav = document.querySelector('.nav');

const handleHouver = function(e) {
  console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblins = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('.nav__logo');

    siblins.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHouver.bind(0.5));
nav.addEventListener('mouseout', handleHouver.bind(1));

////////////////////////////////////
//Slides
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let CurrentSlide = 0;
const maxSlide = slides.length;
slider.style.transform = `scale(1)`;
/////////MINHA SOLUÇÃO///////////////////////////////////////////////////
slides.forEach(
  (slide, i) => (slide.style.transform = `translateX(${i * 100}%)`)
);

btnLeft.addEventListener('click', function() {
  CurrentSlide++;

  if (CurrentSlide > maxSlide - 1) CurrentSlide = 0;
  console.log(CurrentSlide);

  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${(i - CurrentSlide) * 100}%)`)
  );
});
btnRight.addEventListener('click', function() {
  CurrentSlide--;
  
  if (CurrentSlide < 0) CurrentSlide = maxSlide - 1;
  console.log(CurrentSlide);
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${(i - CurrentSlide) * 100}%)`)
  );
});
/////////////////////////////////////////////////////////////////////////////////////
