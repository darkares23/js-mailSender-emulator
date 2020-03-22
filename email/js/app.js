//---------------Variables--------------------------------------
const email = document.getElementById('email'),
    matter = document.getElementById('asunto'),
    message = document.getElementById('mensaje'),
    btnSend = document.getElementById('enviar'),
    btnReset = document.getElementById('resetBtn'),
    formSend = document.getElementById('enviar-mail');

//---------------Event lsiteners--------------------------------
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', startApp);

    //fields from form
    email.addEventListener('blur', validateField);
    matter.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    //btn send in submit
    btnSend.addEventListener('click', sendMail);
    btnReset.addEventListener('click', resetFormulary)

}
//---------------Functions--------------------------------------
function startApp() {
    //Deshabilitation of send
    btnSend.disabled = true;
}
//Validate fields
function validateField() {
    //Validate text len and it does not empty
    lenValidator(this);

    //Email validate
    if (this.type == 'email') {
        validateEmail(this);
    }

    let errors = document.querySelectorAll('.error');

    if (email.value !== '' && matter.value !== '' && message.value !== '') {
        if (errors.length === 0) {
            btnSend.disabled = false;
        }
    }

}
// Reset formulary
function resetFormulary(e) {
    e.preventDefault;
    formSend.reset();
}
//validate len function
function lenValidator(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
// Send email function form
function sendMail(e) {

    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif send mail
    const mailSended = document.createElement('img');

    mailSended.src = 'img/mail.gif';
    mailSended.style.display = 'block';

    // hide spiner and show email sended
    setTimeout(function() {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(mailSended);
        setTimeout(function() {
            mailSended.remove();
            btnSend.reset;

        }, 3000);
    }, 3000);
    e.preventDefault();
}

// validate function for email
function validateEmail(field) {
    const message = field.value;

    if (message.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}