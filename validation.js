const form = document.querySelector('form');
const email = form.querySelector('#Email');

const regex = /[A-Z]/;

const message = document.createElement('p');
message.className = 'error-message';
message.innerText = 'Please submit your email in lower case';

function validate(a) {
  return regex.test(a);
}

form.addEventListener('submit', (e) => {
  if (validate(email.value)) {
    form.insertBefore(message, form.children[5]);
    e.preventDefault();
  }
});