// 5.0 Updated Menu Data Structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];



// 1.0
const mainEl = document.querySelector('main');
//  1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
// 1.2
mainEl.innerHTML = '<h1>WISE Rocks</h1>';
// 1.3
mainEl.classList.add('flex-ctr');

// -------------------------------------------------------

// 2.0
const topMenuEl = document.getElementById('top-menu');
// 2.1
topMenuEl.style.height = '100%';
// 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// 2.3
topMenuEl.classList.add('flex-around');

// -------------------------------------------------------

// 3.1
for (let link of menuLinks) {
  const tempEl = document.createElement('a');
  tempEl.setAttribute('href', link.href)
  tempEl.textContent = link.text
  topMenuEl.appendChild(tempEl)
}

// 4.0
const subMenuEl = document.getElementById('sub-menu');

// 4.1
subMenuEl.style.height = '100%';

// 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// 4.3
subMenuEl.classList.add('flex-around');

// 4.4
subMenuEl.style.position = 'absolute';

// 4.5
subMenuEl.style.top = '0';

// 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

// 5.2
topMenuEl.addEventListener('click', function(evt){
  evt.preventDefault();
  if (evt.target.tagName !=='A'){
    return;
  }
  // console.log(evt.target.textContent);

// 5.3
if (evt.target.classList.contains('active')) {
  evt.target.classList.remove('active');
  showingSubMenu = false;
  subMenuEl.style.top = 0;
  return
}
// 5.4
for(let link of topMenuLinks) {
  link.classList.remove('active');
}
// 5.5
evt.target.classList.add('active');
// 5.6
let currentLink
for (let link of menuLinks) {
  if (link.text === evt.target.textContent){
    if (link.subLinks) {
      showingSubMenu = true;
    } else {
      showingSubMenu = false;
    }
    currentLink = link;
  }
}
// 5.8
const buildSubMenu = (subLinks) => {
  subMenuEl.textContent = ''
  for (let link of subLinks) {
    const tempEl = document.createElement('a');
    tempEl.setAttribute('href', link.href);
    tempEl.textContent = link.text;
    subMenuEl.appendChild(tempEl);
  }
}
// 5.7
if(showingSubMenu){
  buildSubMenu(currentLink.subLinks);
  subMenuEl.style.top = '100%';
} else {
  subMenuEl.style.top = 0;
}


})