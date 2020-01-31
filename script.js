console.log('Add validation!');

let el = document.querySelector('#parking-form');
let inputInvalid = document.querySelectorAll('.input-field')
let numbers = /^[0-9]+$/
let inputFields = document.querySelectorAll('.input')
let required = document.createElement('p')


el.addEventListener('submit', function(e) {
    e.preventDefault();
    // Name Field
    let name = document.querySelector('#name')
    let nameParent = name.parentNode 
    if (name.value !== '') {
        nameParent.classList.add('input-valid')
    } else {
        nameParent.classList.add('input-invalid')
        let children = nameParent.children
        let hasP = false
        for (let child of children) {
            if (child.classList.contains('required')) {
                hasP = true
            }
        }
        if (hasP == false) {
            required.innerText = '*Required'
            required.classList.add('required')
            nameParent.appendChild(required)
        }
    }
    if (nameParent.classList.contains('input-valid')) {
        if (nameParent.contains(required)) {
        nameParent.removeChild(required)
        }
    }
    // Car Year
    // let carYear = document.querySelector('#car-year') 
    // if (carYear.value.match(numbers), carYear.value > 1900) {
    //     carYear.classList.add('input-valid')
    // } 

    // Number of Days
    let numDays = document.querySelector('#days')
    let daysParent = numDays.parentNode
    if (numDays.value.match(numbers), (numDays.value >= 1 && numDays.value <= 30)) {
        daysParent.classList.add('input-valid')
    } else {
        daysParent.classList.add('input-invalid')
        let children = daysParent.children
        let hasP = false
        for (let child of children) {
            if (child.classList.contains('required')) {
                hasP = true
            }
        }
        if (hasP == false) {
            required.innerText = '*Required'
            required.classList.add('required')
            daysParent.appendChild(required)
        }
    }
    if (daysParent.classList.contains('input-valid')) {
        if (daysParent.contains(required)) {
            daysParent.removeChild(required)
        }
    }
})

// el.addEventListener("submit", function (e) {
//     e.preventDefault();
//  // Invalidate empty fields
//     let inputFields = document.querySelectorAll('.input')
//     for (let field of inputFields) {
//         if (field.value === '') {
//             field.parentElement.classList.add('input-invalid')
//  // Add "required" invalid fields
//             let children = field.parentElement.children
//             let hasP = false
//             for (let child of children) {
//                 if (child.classList.contains('required')) {
//                     hasP = true
//                 }
//             }
//             if (hasP == false) {
//                 let required = document.createElement('p')
//                 required.innerText = '*Required'
//                 required.classList.add('required')
//                 field.parentElement.appendChild(required)
//             }
//         }
//     }
// // Validate name field
//     let name = document.querySelector('#name')
//     let parentDiv = name.parentNode
//     for (let field of inputFields) {
//         if (name.value !== '') {
//             parentDiv.classList.remove('input-invalid')
//             parentDiv.classList.add('input-valid')
//             let req = field.parentElement.querySelector('p')
//             console.log(req)
//             if (req) {
//                 field.parentElement.removeChild(req)
//             } else {}
//         }
//     }
// // Validate car year
//     let carYear = document.querySelector('#car-year')
//     let carYearParent = carYear.parentNode
//     for (let field of inputFields) {
//         if (carYear.value.match(numbers)) {
//             carYearParent.classList.remove('input-invalid')
//             carYearParent.classList.add('input-valid')
//             // let required = field.parentElement.querySelector('p')
//             // if (required) {
//             //     field.parentElement.removeChild(required)
//             // }
//         }
//     }
// })

