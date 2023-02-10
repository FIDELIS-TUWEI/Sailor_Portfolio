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
home.setAttribute('href', '#')
home.innerHTML = `Home`;
list1.appendChild(home);

// List 2
const list2 = document.createElement('li');
list2.className = 'nav__item';
ulNav.appendChild(list2);

// Link 2 - a
const about = document.createElement('a');
about.className = 'nav__link';
about.setAttribute('href', '#section')
about.innerHTML = `About`;
list2.appendChild(about);

// List 3 - li
const list3 = document.createElement('li');
list3.className = 'nav__item';
ulNav.appendChild(list3);

// Link 3 - a
const contact = document.createElement('a');
contact.className = 'nav__link';
contact.setAttribute('href', '#')
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

// heroDiv
const heroDiv = document.createElement('div');
heroDiv.className = 'heroDiv'
hero.appendChild(heroDiv);

// hero image
const heroImage = document.createElement('img');
heroImage.setAttribute('src', 'deck.jpg');
heroDiv.appendChild(heroImage);


// about section
const section = document.createElement('section');
section.className = `section`
hero.appendChild(section);

// description
const title = document.createElement('h3');
title.textContent = `I am Frank, a Marine Engineer`;
section.appendChild(title);

// paragraph
const paragraph = document.createElement('p');
paragraph.textContent = `I am a certified seafarer from Dar es salaam Maritime...`;
section.appendChild(paragraph);

// read more div
const readDiv = document.createElement('div');
readDiv.className = 'moreDiv'
section.appendChild(readDiv);

// read more button
const button = document.createElement('button');
button.className = 'link';
button.textContent = `Read More >>`
readDiv.appendChild(button);

// read more
const paragraph2 = document.createElement('p');
paragraph2.textContent = `I have worked as a sailor for three years with experience in both deck and engineering department`;
paragraph2.className = 'more'
paragraph2.style.display = 'none'
readDiv.appendChild(paragraph2);