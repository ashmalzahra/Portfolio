const formContact = document.getElementById('formContact');
const { email } = formContact.elements;
const formMessage = document.querySelector(".form_message");
const err = {Email_lowerCase: 'Email should be in lower case'};

const showMessage = (isError, message) => {formMessage.classList.remove('d-none')
if (isError){
    formMessage.classList.remove('formValid')
    formMessage.classList.add('formError')
}  
else
{
    formMessage.classList.add('formValid')
    formMessage.classList.remove('formError')
} 
    formMessage.textContent = message;
 }

 formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    if(email.value === email.value.toLowerCase()){
        showMessage(false, 'Form Validation Succeeded.');
        formContact.submit();
        return;
    }

    showMessage(true, err.Email_lowerCase);
 })
