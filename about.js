const about = document.createElement('div');
about.setAttribute('id', 'about');
container.appendChild(about);

const aboutText = document.createElement('h2');
aboutText.textContent = `About`;
about.appendChild(aboutText);

const description = document.createElement('p');
description.textContent = `I have worked as a sailor for three years with experience in both deck and engineering department. From 2019 to 2020, I worked as a deck officer at Mbita ferry services onboard MV.Mbita 2 and MV.Mbita 3. From 2020 to 2022, I worked at EMBCO company limited onboard M.T Harambee in the engine room as an assistant engineer. My work experience includes maintenance, repair, servicing of equipment, controlling operations of the ship and caring for persons onboard as well as maintaining high standards of house keeping and engine room watch keeping.`;
description.className = 'more--text';
about.appendChild(description);