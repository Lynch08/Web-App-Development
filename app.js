
// Modal Items

const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main__btn');
const closeBtn = document.querySelector('.close__btn');

//Click Events - waiing for a click

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal){
        modal.style.display = 'none';
    }
})

// Form Validation vars
const form = document.getElementById('form');
const forename = document.getElementById("forename");
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');



// Show error message
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
    
}

// Called if input valid Valid 
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}


// Loop to Check required fields - Not counting as I thought it would
function checkRequired(inputArr) {
    var val = 0;

    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            val = 0;
        } else {
            showValid(input);
            val++;
            if (val >= 4){
                alert("Registration Successful")
                window.location.href = "home_and_signup.html";
                
            }
        }
    })
}


// Check Input Length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} Must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} Must be at less than ${max} characters`);
    } else {
        showValid(input);
    }
}

//check passwords match
function passwordMatch(input1, input2){
    if (input1.value !== input2.value) {
        showError(input2, `Passwords do not match`)
    }
}


// get Field Name for returned messages
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// Event Listeners
form.addEventListener('submit', (e) => {
   e.preventDefault();
    checkRequired([forename, email, password, passwordConfirm]);
    checkLength(forename, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
})
