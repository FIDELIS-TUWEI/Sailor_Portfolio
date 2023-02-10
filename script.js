// Acivate Hamburger
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__menu");

// Event listener 
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

document.querySelectorAll(".nav__link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
}));

// Read more button
const buttonLink = document.querySelector('.link');
const moreRead = document.querySelector('more');

// button event handler
buttonLink.addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.more').style.display = 'block'

});