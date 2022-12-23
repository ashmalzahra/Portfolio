const Form = document.querySelector('form');
const { Name, Email, Description } = Form.elements;

const formValues = JSON.parse(localStorage.getItem('contactForm')) || {
  name: '',
  email: '',
  description: '',
};

const loadInputValuesStored = () => {
  Name.value = formValues.name;
  Email.value = formValues.email;
  Description.value = formValues.description;
};

loadInputValuesStored();

const saveOnLocalStorage = () => {
  localStorage.setItem('contactForm', JSON.stringify(formValues));
};
Name.addEventListener('input', () => {
  formValues.name = Name.value;
  saveOnLocalStorage();
});
Email.addEventListener('input', () => {
  formValues.email = Email.value;
  saveOnLocalStorage();
});
Description.addEventListener('input', () => {
  formValues.description = Description.value;
  saveOnLocalStorage();
});
