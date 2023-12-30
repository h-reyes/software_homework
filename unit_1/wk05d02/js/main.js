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

function handleClick(evt){
    console.log(evt);
}