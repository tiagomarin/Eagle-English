// functions

// generate a random number between 2 integers inclusive
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// BEGINNING OF CODE

// create a teachers database
const teachersDatabase = [
  {
    image: 'assets/pictures/1.png',
    name: 'Julia Stein',
    highlight: '32, graduated in business, worked in multinational companies in different countries',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi assumenda quod at quaerat quo dolorum. Nobis nihil, nulla ullam expedita.',
  },
  {
    image: 'assets/pictures/2.png',
    name: 'Andressa',
    highlight: '26 years old. Likes fashion and her favorite hobby is to watch series.',
    description: 'Dolor sit, amet consectetur adipisicing elit. Nobis nihil, nulla ullam expedita dolores in officiis vitae necessitatibus animi autem sed nesciunt assumenda soluta consequatur.',
  },

  {
    image: 'assets/pictures/3.png',
    name: 'Joana Simpson',
    highlight: '36, loves cooking and watching cooking TV series. She has a lot of background experience',
    description: 'Koind sit amet consectetur adipisicing elit. Aliquid necessitatibus sint ipsa, molestias sed eum nostrum animi sapiente alias, perspiciatis ea praesentium facilis expedita voluptas.',
  },
  {
    image: 'assets/pictures/4.png',
    name: 'Thomas Smith',
    highlight: '26, a tech savy guy who loves e-sports. Also a pet lover',
    description: 'Consectetur adipisicing elit. Debitis ea expedita laborum aspernatur odit maxime obcaecati fugit, sequi illo? Harum labore minus voluptas fugit dolorem expedita nihil.',
  },
  {
    image: 'assets/pictures/5.png',
    name: 'Erik Jones',
    highlight: "'39 years old. A traveller by nature, he just doesn't live in the same place",
    description: 'Sit amet consectetur adipisicing elit. Minus aperiam, numquam architecto tempora magnam et, necessitatibus tempore nemo quisquam, sunt quas delectus repellat corrupti! Non, ipsum quisquam.',
  },
  {
    image: 'assets/pictures/6.png',
    name: 'Alejandro Rojas',
    highlight: '34, loves cultural diferencies and loves to talk. He also likes to watch sports',
    description: 'Amet consectetur adipisicing elit. Dolore laborum, sunt quis eaque vitae omnis quod necessitatibus pariatur repellendus cum maiores? Debitis voluptatem eos assumenda tenetur cumque.',
  },
  {
    image: 'assets/pictures/7.png',
    name: 'John Williams',
    highlight: '44, loves hiking and enjoyng the nature. He has been to many places on earth',
    description: 'Adipisicing elit. Veritatis quam pariatur, sequi cupiditate consequuntur, dolor voluptatem voluptas consequatur accusamus exercitationem, ex similique iste aperiam.',
  },
  {
    image: 'assets/pictures/8.png',
    name: 'Chin Lee',
    highlight: "56, loves reading and chat about anything. You'll never lack subject to talk",
    description: 'Perspiciatis nobis et nihil rem amet ut iusto quis architecto, recusandae, fugiat quaerat porro. Laboriosam ut libero possimus, ratione magni illo.',
  },
  {
    image: 'assets/pictures/9.png',
    name: 'Arthur Thompson',
    highlight: '21 years old, he loves languages and speaks 6 of them. His favorite hobby is chess',
    description: 'Saepe error, voluptatem ab similique aspernatur beatae, nisi facilis a nostrum veritatis ut, reiciendis obcaecati expedita et autem sapiente quo? Exercitationem quia voluptate cupiditate.',
  },
  {
    image: 'assets/pictures/10.png',
    name: 'Will Miller',
    highlight: '38, loves to talk about business and sports. He also likes video games',
    description: 'Mollitia sit, quis perferendis, voluptatibus quibusdam asperiores veniam accusamus consectetur dignissimos consequatur sequi iusto aperiam assumenda obcaecati quas facere, aspernatur illum excepturi aut.',
  },
  {
    image: 'assets/pictures/11.png',
    name: 'Alberta Wilson',
    highlight: "34, loves sports and fitness. She's lived in many countries",
    description: 'Dignissimos, sed nostrum blanditiis esse expedita, eos quis quibusdam odio fugit voluptatem nemo eius maiores assumenda error, alias id omnis cupiditate animi.',
  },
  {
    image: 'assets/pictures/12.png',
    name: 'Jessica Davis',
    highlight: '29, artist enthusiastic who loves to sing. She enjoys reading and travelling',
    description: ' Odit magnam quaerat atque ad saepe repellendus consectetur dolore necessitatibus. Impedit, dolorem asperiores! Magni non doloribus nisi vero, commodi illo dolore a? Autem, voluptas nulla.',
  },
  {
    image: 'assets/pictures/13.png',
    name: 'Andy Young',
    highlight: '27 years old, loves gastronomy and fitness. She loves to watch series',
    description: ' Quia quae inventore eligendi, obcaecati placeat asperiores delectus blanditiis earum, impedit, fuga accusamus quaerat? Nobis tempora, voluptate nesciunt unde quisquam rem.',
  },
  {
    image: 'assets/pictures/14.png',
    name: 'Dean Wright',
    highlight: '28, who loves stand up comedy and racing sports. He has seen F1 around the globe',
    description: 'Harum excepturi, delectus quas ipsum quae dolorum consequatur tenetur id eius rem dolores. Magnam magni aperiam maiores explicabo fugiat omnis debitis totam cumque.',
  },
];
// ps. data base could increase overtime

// create array with 5 ramdon integers
// to be used as index to SHUFFLE through the teachersDatabase
const sixRamdonIndexes = [];
sixRamdonIndexes.push(random(0, teachersDatabase.length - 1));
while (sixRamdonIndexes.length < 6) {
  const ramdonIndex = random(0, teachersDatabase.length - 1);
  if (sixRamdonIndexes.includes(ramdonIndex) === false) {
    sixRamdonIndexes.push(ramdonIndex);
  }
}

// ----------------

const featTeachers = document.getElementById('feat-teachers');
// Section heading
const h2 = document.createElement('h2');
h2.className = 'card-heading';
h2.textContent = 'Our Amazing Teachers';
featTeachers.appendChild(h2);
// litle line between
const span = document.createElement('span');
featTeachers.appendChild(span);
// create a card-gird ul list for teachers
const ul = document.createElement('ul');
ul.id = 'teachers-grid';
featTeachers.appendChild(ul);

// create a cards  (li items
for (let i = 0; i < 6; i += 1) {
  const li = document.createElement('li');
  li.classList = 'teachers-card';
  if (i > 1) { // class only for 3rd to 6th card
    li.classList = 'teachers-card more-mobile';
  }
  ul.appendChild(li);

  // create elements & put in the cards li
  // card image container
  const divImg = document.createElement('div');
  divImg.classList = 'img-container';
  li.appendChild(divImg);
  // card image
  const img = document.createElement('img');
  img.src = teachersDatabase[sixRamdonIndexes[i]].image;
  divImg.appendChild(img);
  // div for card info
  const div = document.createElement('div');
  div.className = 'card-info';
  li.appendChild(div);
  // heading - teacher NAME
  const h3 = document.createElement('h3');
  h3.textContent = teachersDatabase[sixRamdonIndexes[i]].name;
  div.appendChild(h3);
  // sub-heading "teacher highlight"
  const p1 = document.createElement('p');
  p1.classList = 'p1';
  p1.textContent = teachersDatabase[sixRamdonIndexes[i]].highlight;
  div.appendChild(p1);
  // litle line between
  const br = document.createElement('br');
  div.appendChild(br);
  // short description
  const p2 = document.createElement('p');
  p2.classList = 'p2';
  p2.textContent = teachersDatabase[sixRamdonIndexes[i]].description;
  div.appendChild(p2);
}
const button = document.createElement('button');
button.id = 'see-more';
button.innerHTML = 'more <i class="fa-solid fa-angle-down"></i>';
featTeachers.appendChild(button);