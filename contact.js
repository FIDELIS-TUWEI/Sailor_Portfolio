const contactForm = document.createElement('div');
contactForm.setAttribute('id', 'contact--form');
container.appendChild(contactForm);

// Title
const details = document.createElement('h2');
details.textContent = 'Contact';
contactForm.appendChild(details);

// Email
const email = document.createElement('span');
email.textContent = `Email: franklinasekalumumba@gmail.com`;
contactForm.appendChild(email)

// Phone
const phone = document.createElement('span');
phone.textContent = `Phone: 0745538658`;
contactForm.appendChild(phone);