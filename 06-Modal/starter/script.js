'use strict';
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeModel = () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
};
const showModal = () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
};

btnShowModal.forEach(element => {
  element.addEventListener('click', showModal);
});

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModel();
  }
});
