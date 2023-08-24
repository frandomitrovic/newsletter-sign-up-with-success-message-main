const container = document.getElementById('container');
const left = document.getElementById('left');
const right = document.getElementById('right');

const userEmail = document.getElementById('user-email');
const invalidEmail = document.getElementById('invalid-email');
const emailInput = document.getElementById('email');
const submitButton = document.getElementById('submit-btn');

const confirmationMessage = document.getElementById('confirmation-message');
const dismissMessage = document.getElementById('dismiss-message');

function formSuccess() {
    confirmationMessage.classList.add('active');
    container.classList.add('success');
    left.style.display = 'none';
    right.style.display = 'none';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim()

    if(validateEmail(email)) {
        formSuccess();
        userEmail.innerText = email;
        emailInput.value = '';

        invalidEmail.classList.remove('active');
        emailInput.classList.remove('active');
    } else {
        invalidEmail.classList.add('active');
        emailInput.classList.add('active');
    }
    
})

dismissMessage.addEventListener('click', () => {
    left.style.display = 'block'
    right.style.display = 'block'
    container.classList.remove('success')
    confirmationMessage.classList.remove('active')
})