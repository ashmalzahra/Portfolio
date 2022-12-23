const projects = [
  {
    title1: 'My Recent Works',
    class1: 'heading',
    img1: 'images/ImgPlaceholder1.png',
    img2: './images/larger Placeholder.png',
    class: 'text',
    title: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    links: {
      liveVersion: 'https://ashmalzahra.github.io/Portfolio/',
      sourceCode: 'https://github.com/ashmalzahra/Portfolio',
    },
    index: 0,
  },
  {
    id: 'one',
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    links: {
      liveVersion: 'https://ashmalzahra.github.io/Portfolio/',
      sourceCode: 'https://github.com/ashmalzahra/Portfolio',
    },
    index: 0,
    class: 'project',
  },
  {
    id: 'two',
    title: 'Profesional Art Printing Data',
    title2: 'Data Dashboard <br> Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    links: {
      liveVersion: 'https://ashmalzahra.github.io/Portfolio/',
      sourceCode: 'https://github.com/ashmalzahra/Portfolio',
    },
    index: 0,
    class: 'project',
  },
  {
    id: 'three',
    title: 'Profesional Art Printing Data',
    title2: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    links: {
      liveVersion: 'https://ashmalzahra.github.io/Portfolio/',
      sourceCode: 'https://github.com/ashmalzahra/Portfolio',
    },
    index: 0,
    class: 'project',
  },
  {
    id: 'four',
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    links: {
      liveVersion: 'https://ashmalzahra.github.io/Portfolio/',
      sourceCode: 'https://github.com/ashmalzahra/Portfolio',
    },
    index: 0,
    class: 'project',
  },
  {
    id: 'five',
    title: 'Profesional Art Printing Data',
    title2: 'Data Dashboard <br> Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    links: {
      liveVersion: 'https://ashmalzahra.github.io/Portfolio/',
      sourceCode: 'https://github.com/ashmalzahra/Portfolio',
    },
    index: 0,
    class: 'project',
  },
  {
    id: 'six',
    title: 'Profesional Art Printing Data',
    title2: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    links: {
      liveVersion: 'https://ashmalzahra.github.io/Portfolio/',
      sourceCode: 'https://github.com/ashmalzahra/Portfolio',
    },
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

    <img class="main-project" src="${projects[0].img1}" alt="GymFit">
    <img class="desktop-project" src="${projects[0].img2}" alt="GymFit">

    <article class="${projects[0].class}">
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
    <article class="${element.class}" id="${element.id}">
    <h2 class="mobile-version">${element.title}</h2>
    <h2 class="desktop-version">${element.title2}</h2>
    <p>${element.description}</p>
    <ul class="languages">
    <li>${element.technologies[0]}</li>
    <li>${element.technologies[1]}</li>
    <li>${element.technologies[2]}</li>
    </ul>
    <button class="button">See Project</button>
    </article>
   `;
  } else {
    text += `
      <article class="${element.class}" id="${element.id}">
      <h2>${element.title}</h2>
      <p>${element.description}</p>
      <ul class="languages">
      <li>${element.technologies[0]}</li>
      <li>${element.technologies[1]}</li>
      <li>${element.technologies[2]}</li>
      </ul>
      <button class="button">See Project</button>
      </article>
  `;
  }
});

articlesContainer.innerHTML = text;

document.body.insertBefore(articlesContainer, document.body.children[2]);

const closebutton = document.querySelector('.popup #close');

const projectWindow = document.querySelector('.popup');

// const Title = document.getElementById('popupH2');
// const Tech = document.querySelector('.popup-list');
// const imgM = document.getElementById('imgM');
// const imgD = document.getElementById('imgD');
// const Description = document.querySelector('.popup-description');
// const Live = document.getElementById('Live');
// const Source = document.getElementById('Source');

// const createPopup = (projects) => {
//   Title.textContent = projects.title;
//   Description.textContent = projects.description;
//   Tech.innerHTML = projects.technologies.map((technology) => `<li>${technology}</li>`).join('');
//   Live.forEach((link) => {
//     link.href = projects.links.liveVersion;
//   });
//   Source.forEach((link) => {
//     link.href = projects.links.sourceCode;
//   });
// };

function showMenu() {
  projectWindow.style.display = 'flex';
}

function hideMenu() {
  projectWindow.style.display = 'none';
}

closebutton.addEventListener('click', hideMenu);

const btn = document.querySelector('.see-project');
btn.addEventListener('click', showMenu);

const btns = document.querySelectorAll('.button');
for (i of btns) {
  i.addEventListener('click', showMenu);
}
