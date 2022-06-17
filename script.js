// function createCard() {

// create a card div
let card = document.getElementById('feat-teachers');
for (let i = 1; i <= 6; i++) {
  let div = document.createElement('div');
  div.id = 'card' + i;
  card.appendChild(div);

  // create elements & put in the cards div

  // card image
  let img = document.createElement('img');
  img.src = 'assets/tiagoMarin.png';
  div.appendChild(img);

  // heading
  let h2 = document.createElement('h2');
  h2.className = 'card-heading';
  h2.textContent = 'Tiago Marin';
  div.appendChild(h2);

  // sub-heading "background"
  let h3 = document.createElement('h3');
  h3.className = 'teacher-info';
  h3.textContent = 'Graduated in business, worked in multinational companies and lived in different countries';
  div.appendChild(h3);

  //short description
  let p = document.createElement('p');
  p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi assumenda quod at facere incidunt fuga aperiam quaerat quo dolorum?';
  div.appendChild(p);
}

// }

// insert the card to the html