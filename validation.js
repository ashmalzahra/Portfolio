const formContact = document.getElementById('formContact');
const { email } = formContact.elements;
const formMessage = document.querySelector(".form_message");
const err = {Email_lowerCase: 'Email should be in lower case'};

const showMessage = (error, message) => {formMessage.classList.remove('d-none')
if (error){
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
