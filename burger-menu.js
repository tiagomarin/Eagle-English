const openMenuBtn = document.querySelector('.menu-btn');
const clsModalBtn = document.querySelector('.close-menu-btn');
const mobMenu = document.querySelector('.mobile-menu');
const body = document.body;

//open modal reusable function
function openModal(element) {
  element.classList.add('display-block');
};
//close modal reusable function
function clsModal(element) {
  element.classList.remove('display-block');
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

