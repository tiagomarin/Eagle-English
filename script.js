//EXPERIMENTAL
//functions

//generate a random number between 2 integers inclusive
// function random(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// create featured teachers database by SHUFFLING through the teachersDatabase
// tried with random and it repeated

// let featTeachersDatabase = [];
// // let featTeacher = teachersDatabase[random(0, teachersDatabase.length - 1)];
// for (let i = 0; i < 6; i++) {
//   featTeachersDatabase.push(teachersDatabase[random(0, teachersDatabase.length - 1)]);
//   console.log(featTeachersDatabase);
// }

// data base could increase overtime:
// ['image.png', 'name7', 'higlights7', 'description7'],
// ['image.png', 'name8', 'higlights8', 'description8'],
// ['image.png', 'name9', 'higlights9', 'description9']
// ...

// BEGINNING OF CODE

// create a teachers database
const teachersDatabase = [
  ['assets/tiagoMarin.jpeg', 'Tiago Marin', 'Graduated in business, worked in multinational companies and lived in different countries', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi assumenda quod at facere incidunt fuga aperiam quaerat quo dolorum?'],
  ['image.png', 'name2', 'higlights2', 'description2'],
  ['image.png', 'name3', 'higlights3', 'description3'],
  ['image.png', 'name4', 'higlights4', 'description4'],
  ['image.png', 'name5', 'higlights5', 'description5'],
  ['image.png', 'name6', 'higlights6', 'description6'],
];



let featTeachers = document.getElementById('feat-teachers');

//Section heading
let h2 = document.createElement('h2');
h2.className = 'card-heading';
h2.textContent = 'Our Amazin Teachers';
featTeachers.appendChild(h2);

// create a card-gird ul list for teachers
let ul = document.createElement('ul');
ul.id = 'teachers-grid';
featTeachers.appendChild(ul);


// create a card li items
for (let i = 0; i < 6; i++) {
  let li = document.createElement('li');
  li.id = 'card' + i;
  ul.appendChild(li);

  // create elements & put in the cards li

  // card image
  let img = document.createElement('img');
  img.src = teachersDatabase[i][0];
  li.appendChild(img);

  // heading - teacher NAME
  let h3 = document.createElement('h3');
  h3.className = 'card-heading';
  h3.textContent = teachersDatabase[i][1];
  li.appendChild(h3);

  // sub-heading "teacher highlight"
  let p = document.createElement('p');
  p.className = 'teacher-highlight';
  p.textContent = teachersDatabase[i][2];
  li.appendChild(p);

  //short description
  p = document.createElement('p');
  p.className = 'card-para';
  p.textContent = teachersDatabase[i][3];
  li.appendChild(p);
}