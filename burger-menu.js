const openMenuBtn = document.querySelector('.menu-btn');
const clsModalBtn = document.querySelector('.close-menu-btn');
const mobMenu = document.querySelector('.mobile-menu');
const mobMenuContainer = document.querySelector('#mobMenuContainer');
const body = document.body;
const seeMore = document.querySelector('#see-more');
const moreMobile = document.querySelector('.more-mobile');

//open modal reusable function
function openModal(element) {
  element.classList.add('display-flex');
  mobMenuContainer.classList.add('menu-on');
};
//close modal reusable function
function clsModal(element) {
  element.classList.remove('display-flex');
  mobMenuContainer.classList.remove('menu-on');
};

// add "display-block" to mobile menu to show modal
// on menu button click
openMenuBtn.addEventListener('click', () => {
  openModal(mobMenu)
})

// remove "display-block" from mobile menu to hide modal
// on "x" button click / back to "display none"
clsModalBtn.addEventListener('click', () => {
  clsModal(mobMenu)
})
// click outside of mobile menu -> back to "display none"
window.addEventListener('click', (event) => {
  if (event.target === mobMenuContainer || event.target === clsModalBtn) {
    clsModal(mobMenu);
  }
});

window.onscroll = function () {
  "use strict";
  if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
    openMenuBtn.classList.add("colored");
    openMenuBtn.classList.remove("transparent");
  }
  else {
    openMenuBtn.classList.add("transparent");
    openMenuBtn.classList.remove("colored");
  }
};

seeMore.addEventListener('click', () => {
  moreMobile.classList.toggle('more-mobile');
});

