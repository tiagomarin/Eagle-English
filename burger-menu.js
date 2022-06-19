let openMenuBtn = document.querySelector('.menu-btn');
let clsMenuBtn = document.querySelector('.close-menu-btn');
let mobMenu = document.querySelector('.mobile-menu');

openMenuBtn.addEventListener('click', function () {
  mobMenu.setAttribute('id', 'display-block')
});

clsMenuBtn.addEventListener('click', function () {
  mobMenu.setAttribute('id', 'display-block')
});