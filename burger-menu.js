const openMenuBtn = document.querySelector('.menu-btn');
const clsMenuBtn = document.querySelector('.close-menu-btn');
const mobMenu = document.querySelector('.mobile-menu');
const body = document.body;

openMenuBtn.addEventListener('click', function() {
  mobMenu.classList.add('display-block');
  body.classList.add('modal-on')
});
clsMenuBtn.addEventListener('click', function() {
  mobMenu.classList.remove('display-block');
  body.classList.remove('modal-on')
});

// function openModal(element) {
//   element.classList.add('display-block');
// };

// function clsModal(element) {
//   element.classList.add('display-block');
// };

// openMenuBtn.addEventListener('click', openModal(mobMenu));
// clsMenuBtn.addEventListener('click', clsModal(mobMenu));