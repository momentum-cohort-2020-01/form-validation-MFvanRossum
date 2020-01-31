console.log('Add validation!');

let el = document.querySelector('#parking-form');
let inputInvalid = document.querySelectorAll('.input-field')

el.addEventListener("submit", function (e) {
    e.preventDefault();
    // Invalidate empty fields
    let inputFields = document.querySelectorAll('.input')
    for (let field of inputFields) {
        if (field.value === '') {
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
    // Validate name field
    let name = document.querySelector('#name')
    let parentDiv = name.parentNode;
    for (let field of inputFields) {
    if (name.value !== '') {
        parentDiv.classList.remove('input-invalid')
        parentDiv.classList.add('input-valid')
        let required = field.parentElement.querySelector('p')
        if (required){
            field.parentElement.removeChild(required)
        }
    }
}
})


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

