console.log('Add validation!');

let el = document.querySelector('#parking-form');

el.addEventListener("submit", function(e){
    console.log(el)
    e.preventDefault();
    let inputFields = document.querySelectorAll('.input')
    console.log(inputFields)
    for (let field of inputFields) {
    console.log(field.value)
        if (field.value === '') {
            field.parentNode.classList.add('input-invalid')
        }
     }
})


// function fieldRequired() {
//     for (let element of document.querySelectorAll('.input-field')) {
//     if (inputInvalid = 'true');
//     let required = document.createElement('p')
//     required.innerText = '*Required'
//     required.classList.add('required')
//     element.appendChild(required) 
//     }
// }

// function nameValid() {
//     let name = document.querySelector('#name')
//     let parentDiv = name.parentNode;
//     if (name.value !== '') {
//     parentDiv.classList.remove('input-invalid') 
//     parentDiv.classList.add('input-valid')
//     }
// }

// // emptyInvalid()
// nameValid()
// fieldRequired()