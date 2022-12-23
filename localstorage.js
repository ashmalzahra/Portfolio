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
