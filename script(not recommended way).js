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
const isValidEmail= (email) =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Event listener
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(username.value === ''){
        showError(username, 'Username is required!');
    }else{
        showSuccess(username);
    };
    
    if(email.value === ''){
        showError(email, 'Email is required!');
    }else if(!isValidEmail(email.value)){
        showError(email, 'Email is not valid!');

    }else{
        showSuccess(email);
    };

    if(password.value === ''){
        showError(password, 'Password is required!');
    }else if(password !== password2) {
        showError(password, 'Password is not matched! Try again!');
    }else{
        showSuccess(password);
    };

    if(password2.value === ''){
        showError(password2, 'Please confirm the Password!');
    }else if(password2 !== password) {
        showError(password2, 'Password is not matched! Try again!');
    }else{
        showSuccess(password2);
    };
});
