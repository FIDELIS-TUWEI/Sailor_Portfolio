// footer 
const footer = document.createElement('footer');
document.body.append(footer);

// section
const section = document.createElement('section');
section.className = 'section--container';
footer.appendChild(section);

//facebook icon
const facebook = document.createElement('i');
facebook.setAttribute('class', "fa-brands fa-facebook");
footer.appendChild(facebook);

// Twitter icon
const twitter = document.createElement('i');
twitter.setAttribute('class', "fa-brands fa-twitter");
footer.appendChild(twitter);

// instagram icon
const instagram = document.createElement('i');
instagram.setAttribute('class', "fa-brands fa-instagram");
footer.appendChild(instagram);


// footer text
const textFooter = document.createElement('p');
textFooter.innerHTML = `&copy; All rights reserved - 2023.`;
footer.appendChild(textFooter)