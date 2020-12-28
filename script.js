const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show error
const showError = (input, message) =>{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success
const showSuccess = (input) =>{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
const checkEmail= (input) =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) {
        showSuccess(input)
    }else{
        showError(input, `Email is not valid!`)
    }
}

// Check required fields
const checkRequired = (inputArr) => {
    inputArr.forEach((input) => {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required!`)
        }else{
            showSuccess(input)
        }
    })
};

// Check input length
const checkLength = (input, min, max) => {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters!`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be at less than ${max} characters!`);
    }else{
        showSuccess(input);
    }
};

// Check password whether is match
const checkPassword = (input1, input2)=>{
    if(input1.value !== input2.value){
        showError(input2, `Password do not match! Please enter again!`)
    }
}

// Get field name
const getFieldName = (input) =>{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listener
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPassword(password, password2);
});
