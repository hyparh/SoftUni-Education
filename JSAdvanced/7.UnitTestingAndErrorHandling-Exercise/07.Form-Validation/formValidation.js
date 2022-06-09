// function validate() {
//     document.getElementById('company').addEventListener('change', () => {
//         let companyInfo = document.getElementById('companyInfo');

//         if (document.getElementById('company').checked == false) {
//             companyInfo.style.display = 'none';
//         } else {
//             companyInfo.style.display = 'block';
//         }
//     });

//     document.getElementById('submit').addEventListener('click', onClick);

//     function onClick(event) {
//         event.preventDefault();
//         let invalidFields = [];

//         let checkBox = document.querySelector('#company');
//         let username = document.getElementById('username');
//         let usernamePattern = /^[A-Za-z0-9]{3,20}$/;

//         if (!usernamePattern.test(username.value)) {
//             invalidFields.push(username);
//         }

//         let email = document.getElementById('email');
//         let emailPattern = /^[^@.]+@[^@]*\.[^@]+$/; // /^[a-z]+@[a-z]+\\.[a-z]/;

//         if (!emailPattern.test(email.value)) {
//             invalidFields.push(email);
//         }

//         let password = document.getElementById('password');
//         let confirmPass = document.getElementById('confirm-password');
//         let passwordPattern = /^[\w]{5,15}$/;

//         if (!passwordPattern.test(password.value) || confirmPass.value !== password.value) {
//             invalidFields.push(password);
//             invalidFields.push(confirmPass);
//         }

//         if (checkBox.checked) {
//             let companyId = document.getElementById('companyNumber');
//             let companyPattern = /^[0-9]{4}$/;

//             if (!companyPattern.test(companyId.value)) {
//                 invalidFields.push(companyId);
//             }
//         }

//         invalidFields.forEach(field => field.style.borderColor = 'red');

//         !invalidFields.length ? document.querySelector('#valid').style.display = 'block' : 
//         document.querySelector('#valid').style.block = 'none';
//     }
// }

// this one works 100/100
function validate() {
    let usernamePattern = /^[a-zA-Z0-9]{3,20}$/m;  
    let emailPattern = /^.*@.*\..*$/m;
    let passwordPattern = /^[\w]{5,15}$/m;  //
    let companyFieldPattern = /^[1-9][0-9]{3}$/m;  

    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const checkBox = document.querySelector('#company')
    const companyInfo = document.querySelector('#companyInfo');
    const companyNumber = document.querySelector('#companyNumber');
    const submitButton = document.querySelector('#submit');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        let isDataValid = true;
        let isCompanyNumberValid = false;
        
        if (!usernamePattern.test(username.value)) {
            username.style = 'border-color: red';
            isDataValid = false;
        } else {
            username.removeAttribute('style');
        }

        if (!emailPattern.test(email.value)) {
            email.style = 'border-color: red';
            isDataValid = false;
        } else {
            email.removeAttribute('style');
        }

        if (!passwordPattern.test(confirmPassword.value) || password.value !== confirmPassword.value) {
            password.style = 'border-color: red';
            isDataValid = false;
        } else {
            password.removeAttribute('style');
        }

        if (!passwordPattern.test(confirmPassword.value) || password.value !== confirmPassword.value) {
            confirmPassword.style = 'border-color: red';
            isDataValid = false;
        } else {
            confirmPassword.removeAttribute('style');
        }

        if (!companyFieldPattern.test(companyNumber.value) && checkBox.checked ==true) {
            companyNumber.style = 'border-color: red';
            isCompanyNumberValid = false;
        } else if (companyFieldPattern.test(companyNumber.value) && checkBox.checked ==true){
            companyNumber.removeAttribute('style');
            isCompanyNumberValid = true;
        }

        if (isDataValid && checkBox.checked ==false){
            document.querySelector('#valid').style = 'display: block';
        } else if (isDataValid && checkBox.checked ==true && isCompanyNumberValid){
            document.querySelector('#valid').style = 'display: block';
        } else {
            document.querySelector('#valid').style = 'display: none';
        }
    });

    checkBox.addEventListener('change', (event) => {
        if (event.target.checked == true){
            companyInfo.style.display = 'block';

        } else {
            companyInfo.style.display = 'none';
        }
    });
}
