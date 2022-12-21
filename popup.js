const projects = [
  {
    class1: 'heading',
    title1: 'My Recent Works',
    img: 'images/ImgPlaceholder1.png',
    class: 'text',
    title: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index: 0,
  },

  {
    id: 'one',
    title: 'Professional Art <br> Printing Date',
    description: "A daily selection of privately personalized needs; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    button: 'See Project',
    index: 0,
    class: 'project',
  },

  {
    id: 'two',
    title: 'Professional Art <br> Printing Date',
    title2: 'Data Dashboard <br> Healthcare',
    description: "A daily selection of privately personalized needs; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    button: 'See Project',
    index: 0,
    class: 'project',
  },

  {
    id: 'three',
    title: 'Professional Art Printing Date',
    title2: 'Website Portfolio',
    description: "A daily selection of privately personalized needs; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    button: 'See Project',
    index: 0,
    class: 'project',
  },

  {
    id: 'four',
    title: 'Professional Art <br> Printing Date',
    description: "A daily selection of privately personalized needs; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    button: 'See Project',
    index: 0,
    class: 'project',
  },

  {
    id: 'five',
    title: 'Professional Art <br> Printing Date',
    title2: 'Data Dashboard <br> Healthcare',
    description: "A daily selection of privately personalized needs; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    button: 'See Project',
    index: 0,
    class: 'project',
  },

  {
    id: 'six',
    title: 'Professional Art Printing Date',
    title2: 'Website Portfolio',
    description: "A daily selection of privately personalized needs; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    button: 'See Project',
    index: 0,
    class: 'project',
  },
];

const articlesContainer = document.createElement('section');
articlesContainer.classList.add('work');
articlesContainer.id = 'portfolio';

let text = '';

projects.forEach((element) => {
  if (element === projects[0]) {
    text += `
        <h3 class="${projects[0].class1}">${projects[0].title1}</h3>
        <hr id="line">

        <img class="main-project" src="${projects[0].img}" alt="image-one">

        <article class"${projects[0].class}">
        <h2>${projects[0].title}</h2>
        <p>${projects[0].description}</p>
        <ul id="languages">
        <li>${projects[0].technologies[0]}</li>
        <li>${projects[0].technologies[1]}</li>
        <li>${projects[0].technologies[2]}</li>
        <li>${projects[0].technologies[3]}</li>
        </ul>
        
        <button class="see-project">See Project</button>
        </article>`;
  } else if ('title2' in element) {
    text += `
        <article class"${element.class}" id="${element.id}">
        <h2 class"mobile-version">${element.title}</h2>
        <h2 class"desktop-version">${element.title2}</h2>
        <p>${element.description}</p>
        <ul class="languages">
        <li>${element.technologies[0]}</li>
        <li>${element.technologies[1]}</li>
        <li>${element.technologies[2]}</li>
        </ul>

        <button class"button">${element.button}</button>
        </article>`;
  } else {
    text += `
        <article class"${element.class}" id="${element.id}">
        <h2>${element.title}</h2>
        <p>${element.description}</p>
        <ul class="languages">
        <li>${element.technologies[0]}</li>
        <li>${element.technologies[1]}</li>
        <li>${element.technologies[2]}</li>
        </ul>

        <button class"button">${element.button}</button>
        </article>`;
  }
});

articlesContainer.innerHTML = text;

document.body.insertBefore(articlesContainer, document.body.children[2]);

// const closeButton = document.querySelector('.popup #close');
// const popupWindow = document.querySelector('.popup');

// function showPopup() {
//   popupWindow.style.display = 'flex';
// }

// function hidePopup() {
//   popupWindow.style.display = 'none';
// }

// projects.forEach((element) => {
//   const btn = document.querySelector('.see-project .button');
//   btn.addEventListener('click', showPopup);
// });

// closeButton.addEventListener('click', hidePopup);