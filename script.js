'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}; // function to open modal

const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
}; // close the modal

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  console.log('no action');
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
      console.log('hEYY');
    }
  }
});

document.addEventListener('keydown', function (e) {});

overlay.addEventListener('click', closeModal);
