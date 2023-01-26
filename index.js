// Header
const header = document.createElement('header');
document.body.append(header);

// Nav Bar
const navBar = document.createElement('nav');
navBar.setAttribute('class', 'nav__bar');
header.appendChild(navBar);

// Logo
const logo = document.createElement('a');
logo.setAttribute('class', 'nav__brand');
logo.innerHTML = `Frank`;
navBar.appendChild(logo)

// Nav Menu - ul
const ulNav = document.createElement('ul');
ulNav.setAttribute('class', 'nav__menu');
navBar.appendChild(ulNav);

// Nav list - li
const list1 = document.createElement('li');
list1.setAttribute('class', 'nav__item');
ulNav.appendChild(list1);

// Link 1 - a
const home = document.createElement('a');
home.setAttribute('class', 'nav__link')
home.innerHTML = `Home`;
list1.appendChild(home);

// List 2
const list2 = document.createElement('li');
list2.setAttribute('class', 'nav__item');
ulNav.appendChild(list2);

// Link 2 - a
const about = document.createElement('a');
about.setAttribute('class', 'nav__link');
about.innerHTML = `About`;
list2.appendChild(about);

// List 3 - li
const list3 = document.createElement('li');
list3.setAttribute('class', 'nav__item');
ulNav.appendChild(list3);

// Link 3 - a
const contact = document.createElement('a');
contact.setAttribute('class', 'nav__link');
contact.innerHTML = `Contact Me`;
list3.appendChild(contact);

// Hamburger 
const hamburgerMenu = document.createElement('div');
hamburgerMenu.setAttribute('class', 'hamburger');
navBar.appendChild(hamburgerMenu);

// Span - bars
const span1 = document.createElement('span');
span1.setAttribute('class', 'bar');
hamburgerMenu.appendChild(span1);

// Span 2
const span2 = document.createElement('span');
span2.setAttribute('class', 'bar');
hamburgerMenu.appendChild(span2);

// Span 3
const span3 = document.createElement('span');
span3.setAttribute('class', 'bar');
hamburgerMenu.appendChild(span3);