let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
const mainTitleEl = document.querySelector('#main-title').textContent = 'DOM Toretto';
  // Part 2
  const bodyEl = document.getElementById('body');
bodyEl.style.backgroundColor = "cyan";
// Part 3
let ul = document.getElementById("favorite-things");
let lastLi = ul.lastElementChild;
if (lastLi){
  ul.removeChild(lastLi);
}
  // Part 4
const selectOr= document.querySelectorAll('special-title');
for(let i=0; i<selectOr.length; i++){

  selectOr.style.fontSize ='2rem';

}
  // Part 5
let pastRacesList = document.getElementById('past-races');
let itemChicago = document.getElementsByTagName('li');

for (let i = 0; i< itemChicago.length; i++){
  if(itemChicago[i].textContent === 'Chicago') {
    pastRacesList.removeChild(itemChicago[i]);
    break;
  }
}
  // Part 6
  let addLi = pastRacesList.lastElementChild;
  if (addLi){
    const newLi = document.createElement('li');
    newLi.textContent = 'Miami';
    pastRacesList.appendChild(newLi);
  }
  // Part 7
  let mainDiv = document.createElement('div');
  mainDiv.id = 'miamiFeed';
  mainDiv.className = 'blog-post';

  let h1 = document.createElement('h1');
  h1.textContent = 'Miami';
  mainDiv.appendChild(h1);

  let p = document.createElement('p');
  p.textContent = 'HIT THE BEACH WITH THE FAM!';
  mainDiv.appendChild(p);

  document.querySelector('.main').appendChild(mainDiv);

// Original code worked but didn't center
// let mainDiv = document.createElement('div');
//   let newDiv = document.createElement('div');
//   let newHead = document.createElement('h1');
//   let newP = document.createElement('p');

//   function newFeed(title, content, color) {
//   newDiv.classList.add('blog-post');
//   newHead.textContent = title;
//   newP.textContent = content;
//   newDiv.classList.add(color);

// newDiv.appendChild(newHead);
// newDiv.appendChild(newP);

// return newDiv;
// }
// function addToMain(miamiFeed) {
//   mainDiv.classList.add('main');
//   mainDiv.appendChild(miamiFeed);
//   return mainDiv;
// }
// let miamiFeed = newFeed('Miami','HIT THE BEACH WITH THE FAM!', 'purple');

// mainDiv = addToMain(miamiFeed);
// document.body.appendChild(mainDiv);
  // Part 8
document.querySelector('#quote-title').addEventListener('click', randomQuote);

  // Part 9
const blogPost = document.querySelectorAll('.blog-post');

blogPost.forEach(function(blogP){
  blogP.addEventListener('mouseout', function() {
    blogP.classList.toggle('purple');
  });
  blogP.addEventListener('mouseenter', function() {
    blogP.classList.toggle('red');
  });
});



});
