// function createCard() {


let featTeachers = document.getElementById('feat-teachers');

let h2 = document.createElement('h2');
h2.className = 'card-heading';
h2.textContent = 'Our Amazin Teachers';
featTeachers.appendChild(h2);

// create a card-gird ul list for teachers
let ul = document.createElement('ul');
ul.id = 'teachers-grid';
featTeachers.appendChild(ul);


// create a card li items
for (let i = 1; i <= 6; i++) {
  let li = document.createElement('li');
  li.id = 'card' + i;
  ul.appendChild(li);

  // create elements & put in the cards li

  // card image
  let img = document.createElement('img');
  img.src = 'assets/tiagoMarin.png';
  li.appendChild(img);

  // heading
  let h3 = document.createElement('h3');
  h3.className = 'card-heading';
  h3.textContent = 'Tiago Marin';
  li.appendChild(h3);

  // sub-heading "background"
  let p = document.createElement('p');
  p.className = 'teacher-info';
  p.textContent = 'Graduated in business, worked in multinational companies and lived in different countries';
  li.appendChild(p);

  //short description
  p = document.createElement('p');
  p.className = 'card-para';
  p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi assumenda quod at facere incidunt fuga aperiam quaerat quo dolorum?';
  li.appendChild(p);
}

// }

// insert the card to the html