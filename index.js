// Mobile first design

// Header
const header = document.createElement('header');
document.body.append(header);

// Nav Bar
const navBar = document.createElement('nav');
navBar.className = 'nav--bar'
header.appendChild(navBar);

// Logo
const navLogo = document.createElement('img');
navLogo.setAttribute('src', 'logo.png');
navLogo.className = 'nav--logo'
navBar.appendChild(navLogo);

// Nav Menu
const navMenu = document.createElement('ul');
navMenu.className = 'nav--menu';
navBar.appendChild(navMenu);

// List item 1
const list1 = document.createElement('li');
list1.className = 'list--item';
navMenu.appendChild(list1);

// anchor link 1
const anchor1 = document.createElement('a');
anchor1.className = 'link'
list1.appendChild(anchor1);

// span link1
const span1 = document.createElement('span');
span1.className = 'home'
span1.textContent = 'Home';
anchor1.appendChild(span1);

// List item 2
const list2 = document.createElement('li');
list2.className = 'list--item';
navMenu.appendChild(list2);

// anchor link 2
const anchor2 = document.createElement('a');
anchor2.textContent = 'About'
list2.appendChild(anchor2);

// list item 3
const list3 = document.createElement('li');
list3.className = 'list--item';
navMenu.appendChild(list3);

// anchor 3
const anchor3 = document.createElement('a');
anchor3.textContent = 'Resume';
list3.appendChild(anchor3);

// List item 4
const list4 = document.createElement('li');
list4.className = 'list--item';
navMenu.appendChild(list4);

// anchor 4
const anchor4 = document.createElement('a');
anchor4.textContent = 'Contact';
list4.appendChild(anchor4);

// Hamburger menu
const hamburger = document.createElement('div');
hamburger.className = 'hamburger--menu';
navBar.appendChild(hamburger);

// hamburger bar
const bar1 = document.createElement('span');
bar1.className = 'bar';
hamburger.appendChild(bar1);

const bar2 = document.createElement('span');
bar2.className = 'bar';
hamburger.appendChild(bar2);

const bar3 = document.createElement('span');
bar3.className = 'bar';
hamburger.appendChild(bar3);