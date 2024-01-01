const btn = document.querySelector("button");
btn.addEventListener('click', function(evt){
    // test
    const li = document.createElement('li');
    const inp = document.querySelector('input');
    li.textContent = inp.value;
    document.querySelector('ul').appendChild(li);
    // clear input after commenting 
    inp.value= '';
}
);

document.querySelector('ul')
.addEventListener('click', handleClick);
// specifies of what happens when comment is clicked
function handleClick(evt){
const ul = document.querySelector('ul');
ul.addEventListener('click', handleClick);

// changes color of clucked comment
evt.target.style.color = 'red';

// remove event listener for ul clicks
ul.removeEventListener('click', handleClick);

// Restore event listener for ul clicks and reverts color change
ul.addEventListener('click', function(evt){
    // revert color to black
    evt.target.style.color = 'black';
    // restore event listener for ul clicks
    ul.addEventListener('click', handleClick);
});
}
