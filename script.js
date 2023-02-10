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


// loader 
const loader = document.getElementById('load');

document.body.style.overflow = "hidden";

setTimeout(() => {
    loader.style.cssText = "opacity: 0; z-index: -999999995555599955;"
    document.body.style.overflow = "auto"
}, 2000);

// scroll to top
let arrowbtn = document.getElementById("top");

arrowbtn.style.opacity = "0";

window.onscroll = function () {
    if(window.scrollY >= 500) {
        arrowbtn.style.cssText = "opacity: 1;";
    } else {
        arrowbtn.style.cssText = "opacity: 0;";
    }
};

// When the scroll -up btn is clicked function
arrowbtn.onclick = function (){
    window.scrollTo({
        top: 0,
        behaviour: "smooth",
    });
};