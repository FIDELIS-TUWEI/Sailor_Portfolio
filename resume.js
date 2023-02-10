// resume 
const resumeDiv = document.createElement('div');
resumeDiv.setAttribute('id', 'resume')
container.appendChild(resumeDiv);

// title
const resumeTitle = document.createElement('h2');
resumeTitle.textContent = `Resume`;
resumeDiv.appendChild(resumeTitle);

const pdfView = document.createElement('embed');
pdfView.setAttribute('src', 'FRANKLIN_CV.pdf');
pdfView.setAttribute('width', '100%');
pdfView.setAttribute('height', '600px');
pdfView.className = 'pdf-view';
resumeDiv.appendChild(pdfView);