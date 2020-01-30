console.log('Add validation!');

let inputInvalid = document.querySelector('.input-invalid'); 
// let inputField = document.querySelectorAll('.input-field');

function fieldRequired() {
    for (let element of document.querySelectorAll('.input-field')) {
    if (inputInvalid = true);
    let required = document.createElement('p')
    required.innerText = '*Required'
    required.classList.add('required')
    element.appendChild(required) 
    }
}

fieldRequired()