// Mobile first design
// loader 
const load = document.createElement('div');
load.setAttribute('id', 'load');
load.className = 'load'
document.body.append(load);

// loader span
const loaderSpan = document.createElement('span');
load.appendChild(loaderSpan);

// scroll to top arrow
const arrowUp = document.createElement('div');
arrowUp.className = 'top';
arrowUp.setAttribute('id', 'top')
document.body.append(arrowUp);

// arrow up
const upArrow = document.createElement('i');
upArrow.setAttribute('class', "fa-solid fa-arrow-up")
//upArrow.setAttribute('aria-hidden', 'true');
arrowUp.appendChild(upArrow);

// Header
const header = document.createElement('header');
document.body.append(header);

// Nav Bar
const navBar = document.createElement('nav');
navBar.className = 'nav--bar'
navBar.setAttribute('id', 'home')
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
anchor1.setAttribute('href', '#home')
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
anchor2.setAttribute('href', '#about')
list2.appendChild(anchor2);

// list item 3
const list3 = document.createElement('li');
list3.className = 'list--item';
navMenu.appendChild(list3);

// anchor 3
const anchor3 = document.createElement('a');
anchor3.textContent = 'Resume';
anchor3.setAttribute('href', '#resume');
list3.appendChild(anchor3);

// List item 4
const list4 = document.createElement('li');
list4.className = 'list--item';
navMenu.appendChild(list4);

// anchor 4
const anchor4 = document.createElement('a');
anchor4.textContent = 'Contact';
anchor4.setAttribute('href', '#contact--form')
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

// Hero
const hero = document.createElement('main');
document.body.append(hero);

// Container
const container = document.createElement('div');
container.className = 'container';
hero.appendChild(container);

// text-container
const textContent = document.createElement('div');
textContent.className = 'text--container';
container.appendChild(textContent);

// title text
const title = document.createElement('h3');
title.textContent = `Hello I'm Frank`;
textContent.appendChild(title);

// sub-title
const subTitle = document.createElement('h4');
subTitle.textContent = `I'm a Marine Engineer`;
textContent.appendChild(subTitle);

// brief overview
const paragraph = document.createElement('p');
paragraph.innerHTML = `I have a Rating forming part of engineering watch certificate from Dar es salaam Maritime Institute Tanzania and standards of training, certification and watch keeping for seafarers(STCW) &#9972;.`;
paragraph.className = 'more--text'
textContent.appendChild(paragraph);

// Read more link
const readMore = document.createElement('a');
readMore.className = 'read__link';
readMore.innerHTML = `More `;
readMore.setAttribute('href', '#about')
textContent.appendChild(readMore);

// Arrow icon
const arrowIcon = document.createElement('i');
arrowIcon.setAttribute('class', 'fa-solid fa-arrow-right');
readMore.appendChild(arrowIcon);

// Image
const image = document.createElement('img');
image.setAttribute('src', 'frank.jpeg');
container.appendChild(image);
