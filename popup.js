const popup = [
  {
    class: 'popup-title',
    idh2: 'popupH2',
    title: 'Multi Post Stories',
    idbtn: 'close',
    img1: 'images/close.png',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    class1: 'img_description',
    img: 'images/Snapshoot Portfolio.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    classButtons: 'popup-buttons',
    classB: 'popup-button',
    firstButton: 'See Live',
    img2: 'images/Icon.png',
    secondButton: 'See Source',
    img3: 'images/GitVector.png',
  }];

const popupContainer = document.createElement('section');
popupContainer.classList.add('popup');

let text = '';

text += `
    <div class="${popup.class}">
    <h2 id="${popup.idh2}">${popup.title}</h2>
    <i id="${popup.idbtn}"> 
    <img src"${popup.img1}" alt="Close">
    </i>
    </div>
    <ul class="popup-list">
    <li>${popup.technologies[0]} </li>
    <li>${popup.technologies[1]} </li>
    <li>${popup.technologies[2]} </li>
    </ul>
    <div class="${popup.class1}">
    <img src"${popup.img}" alt="Portfolio Image">
    <p class="popup-description"> ${popup.description} </p>
    <div class="${popup.classButtons}">
    <button type="button" class="${popup.classB}">
    ${popup.firstButton}
    <img src="${popup.img2}" alt="Icon">
    </button>
    <button type="button" id="source" class="${popup.classB}">
    ${popup.secondButton}
    <img src="${popup.img3}" alt="Github">
    </button>
    </div>
    </div>
    `;

popupContainer.innerHTML = text;

const closeButton = document.querySelector(`${popup.idbtn}`);
const popupWindow = document.querySelector('.popup');

function showPopup() {
  popupWindow.style.display = 'flex';
}

function hidePopup() {
  popupWindow.style.display = 'none';
}

const btn = document.querySelector('.see-project .project');
btn.addEventListener('click', showPopup);

closeButton.addEventListener('click', hidePopup);