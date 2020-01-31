console.log('Add validation!');

let el = document.querySelector('#parking-form');
let inputInvalid = document.querySelectorAll('.input-field')

el.addEventListener("submit", function (e) {
    e.preventDefault();
    // Invalidate empty fields
    let inputFields = document.querySelectorAll('.input')
    for (let field of inputFields) {
        if (field.value === '') {
            console.log('here')
            field.parentElement.classList.add('input-invalid')
            // Add "required" invalid fields
            let children = field.parentElement.children
            let hasP = false
            for (let child of children) {
                if (child.classList.contains('required')) {
                    hasP = true
                }    
            }
            if (hasP == false) {
                let required = document.createElement('p')
                required.innerText = '*Required'
                required.classList.add('required')
                field.parentElement.appendChild(required)
            }
        }
    }
})


// Add "required" message to invalid fields
// let inputInvalid = document.querySelectorAll('.input-invalid')
//      for (let field of inputFields) {
//          if (inputInvalid == 'true')
//          let required = docment.createElement('p')
//          required.innerText = '*Required'
//          required.classList.add('required')
//          field.appendChild(required)
//      })


// function fieldRequired() {
//     for (let element of document.querySelectorAll('.input-field')) {
//     if (inputInvalid === true);
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

