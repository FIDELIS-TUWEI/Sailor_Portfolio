const hamburgerMenu = document.querySelector('.hamburger--menu');
const menu = document.querySelector('.nav--menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle("active");
    menu.classList.toggle("active");
});

document.querySelectorAll(".list--item").forEach(n => n.addEventListener('click', () => {
    hamburgerMenu.classList.remove("active");
    menu.classList.remove("active");
}));