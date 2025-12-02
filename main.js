const container = document.querySelector('.container');
const submit = document.getElementById('submit');
const errorMessage = document.getElementById('error-message');
const emailInput = document.getElementById('email');
const sucessMessage = document.querySelector('.sucess-message');
const dismissButton = document.getElementById('dismiss-message');
const nameEmail = document.getElementById('name-email');

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    if(isValidEmail(emailValue)) {
        container.style.display = 'none';
        sucessMessage.removeAttribute('hidden');
        sucessMessage.style.display = 'flex';
        sucessMessage.style.flexDirection = 'column';
        sucessMessage.style.justifyContent = 'center';
        sucessMessage.style.alignItems = 'center';
        nameEmail.textContent = emailValue;
} else{
    errorMessage.removeAttribute('hidden');
    emailInput.classList.add('error-message');
}
});

dismissButton.addEventListener('click', () => {
    sucessMessage.style.display = 'none';
    sucessMessage.setAttribute('hidden', true);
    container.style.display = 'flex';
    emailInput.value = '';
    emailInput.classList.remove('error-message');
    errorMessage.setAttribute('hidden', 'true');
});