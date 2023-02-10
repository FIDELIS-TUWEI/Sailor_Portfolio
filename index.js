// Header
const header = document.createElement('header');
document.body.append(header);

// Nav Bar
const navBar = document.createElement('nav');
navBar.className = 'nav__bar';
header.appendChild(navBar);

// Logo
const logo = document.createElement('a');
logo.className = 'nav__brand';
logo.innerHTML = `Frank`;
navBar.appendChild(logo)

// Nav Menu - ul
const ulNav = document.createElement('ul');
ulNav.className = 'nav__menu';
navBar.appendChild(ulNav);

// Nav list - li
const list1 = document.createElement('li');
list1.className = 'nav__item';
ulNav.appendChild(list1);

// Link 1 - a
const home = document.createElement('a');
home.className = 'nav__link';
home.innerHTML = `Home`;
list1.appendChild(home);

// List 2
const list2 = document.createElement('li');
list2.className = 'nav__item';
ulNav.appendChild(list2);

// Link 2 - a
const about = document.createElement('a');
about.className = 'nav__link';
about.innerHTML = `About`;
list2.appendChild(about);

// List 3 - li
const list3 = document.createElement('li');
list3.className = 'nav__item';
ulNav.appendChild(list3);

// Link 3 - a
const contact = document.createElement('a');
contact.className = 'nav__link';
contact.innerHTML = `Contact Me`;
list3.appendChild(contact);

// Hamburger 
const hamburgerMenu = document.createElement('div');
hamburgerMenu.className ='hamburger';
navBar.appendChild(hamburgerMenu);

// Span - bars
const span1 = document.createElement('span');
span1.className ='bar';
hamburgerMenu.appendChild(span1);

// Span 2
const span2 = document.createElement('span');
span2.className ='bar';
hamburgerMenu.appendChild(span2);

// Span 3
const span3 = document.createElement('span');
span3.className = 'bar';
hamburgerMenu.appendChild(span3);

// Hero Section
const hero = document.createElement('main');
hero.className = 'hero--section'
document.body.append(hero);

