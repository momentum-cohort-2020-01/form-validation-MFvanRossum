console.log('Add validation!');

let el = document.querySelector('#parking-form');
let inputInvalid = document.querySelectorAll('.input-field')
let numbers = /^[0-9]+$/
let inputFields = document.querySelectorAll('.input')
let required = document.createElement('p')
let now = moment()


el.addEventListener('submit', function (e) {
    e.preventDefault();
    let error = document.querySelectorAll('.required')
    for (let element of error) {
        element.remove()
    }
    validateName();
    validateCar();
    validateDays();
    validateCreditCard();
    validateCVV();
})

// Name Field
function validateName() {
    let name = document.querySelector('#name')
    let nameParent = name.parentNode
    if (name.value !== '') {
        nameParent.classList.add('input-valid')
    } else {
        nameParent.classList.add('input-invalid')
        let childrenName = nameParent.children
        let hasP = false
        for (let child of childrenName) {
            if (child.classList.contains('required')) {
                hasP = true
            }
        }
        if (hasP == false) {
            let required = document.createElement('p')
            required.innerText = '*Required'
            required.classList.add('required')
            nameParent.appendChild(required)
        }
    }   
}

// Car
function validateCar() {
    let car = document.querySelector('#car-field')
    let carYear = document.querySelector('#car-year')
    let carMake = document.querySelector('#car-make')
    let carModel = document.querySelector('#car-model')
    if (carYear.value !== '' && carMake.value !== '' && carModel.value !== '') {
        car.classList.add('input-valid')
    } else if (!carYear.value.match(numbers), carYear.value < 1900, now.isBefore(carYear.value)) {
        car.classList.add('input-invalid')
    } else {
        car.classList.add('input-invalid')
        let childrenCar = car.children
        let hasP = false
        for (let child of childrenCar) {
            if (child.classList.contains('required')) {
                hasP = true
            }
        }
        if (hasP == false) {
            let required = document.createElement('p')
            required.innerText = '*Required'
            required.classList.add('required')
            car.appendChild(required)
        }
    } 
}  


// Number of Days
function validateDays() {
    let numDays = document.querySelector('#days')
    let daysParent = numDays.parentNode
    if (numDays.value.match(numbers), (numDays.value >= 1 && numDays.value <= 30)) {
        daysParent.classList.add('input-valid')
    } else {
        daysParent.classList.add('input-invalid')
        let childrenDays = daysParent.children
        let hasP = false
        for (let child of childrenDays) {
            if (child.classList.contains('required')) {
                hasP = true
            }
        }
        if (hasP == false) {
            let required = document.createElement('p')
            required.innerText = '*Required'
            required.classList.add('required')
            daysParent.appendChild(required)
        }
    }
}

// Credit Card Number
function validateCreditCard() {
    let creditCard = document.querySelector('#credit-card')
    let ccParent = creditCard.parentNode
    if (creditCard.value.match(numbers) && creditCard.value.length == 16) {
        ccParent.classList.add('input-valid')
    } else {
        ccParent.classList.add('input-invalid')
        let childrenCC = ccParent.children
        let hasP = false
        for (let child of childrenCC) {
            if (child.classList.contains('required')) {
                hasP = true
            }
        }
        if (hasP == false) {
            let required = document.createElement('p')
            required.innerText = '*Required'
            required.classList.add('required')
            ccParent.appendChild(required)
        }
    }
}

// CCV
function validateCVV() {
    let cvv = document.querySelector('#cvv')
    let cvvParent = cvv.parentNode
    if (cvv.value.match(numbers) && cvv.value.length == 3) {
        cvvParent.classList.add('input-valid')
    } else {
        cvvParent.classList.add('input-invalid')
        let childrenCVV = cvvParent.children
        let hasP = false
        for (let child of childrenCVV) {
            if (child.classList.contains('required')) {
                hasP = true
            }
        }
        if (hasP == false) {
            let required = document.createElement('p')
            required.innerText = '*Required'
            required.classList.add('required')
            cvvParent.appendChild(required)
        }
    }
    if (cvvParent.classList.contains('input-valid')) {
        if (cvvParent.contains(required)) {
            cvvParent.removeChild(required)
        }
    }
}


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