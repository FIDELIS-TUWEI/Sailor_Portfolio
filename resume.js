// resume 
const resumeDiv = document.createElement('div');
resumeDiv.setAttribute('id', 'resume')
container.appendChild(resumeDiv);

// title
const resumeTitle = document.createElement('h2');
resumeTitle.textContent = `Resume`;
resumeDiv.appendChild(resumeTitle);

// image
const img1 = document.createElement('img');
img1.setAttribute('src', './frank_cv/Frank-cv1.svg');
resumeDiv.appendChild(img1);

// image 2
const img2 = document.createElement('img');
img2.setAttribute('src', 'frank_cv/Frank-cv2.svg');
resumeDiv.appendChild(img2);

/* const pdfView = document.createElement('embed');
pdfView.setAttribute('src', 'FRANKLIN_CV.pdf');
pdfView.setAttribute('width', '100%');
pdfView.setAttribute('height', '600px');
pdfView.className = 'pdf-view';
resumeDiv.appendChild(pdfView); */