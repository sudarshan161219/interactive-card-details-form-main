const cardNumber = document.querySelector(".heading");
const namE = document.querySelector(".paragraph-1");
const month = document.querySelector(".monthh");
const year = document.querySelector(".yearr");
const cvc = document.querySelector(".cvc-details");


const inputName = document.querySelector(".input-name");
const inputNumber = document.querySelector(".input-card-number");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");
const inputCvc = document.querySelector(".input-cvc");
const form = document.querySelector('.form');
const thankyou = document.querySelector(".thank-you");
const input = document.querySelector(".input");

const btn = document.querySelector(".btn");
const continueBtn = document.querySelector(".continue")


const nameError = document.querySelector('.name-error');
const cardError = document.querySelector('.card-error');
const cardError2 = document.querySelector('.card-error-2');
const monthYear = document.querySelector('.exp-error');
const monthYear2 = document.querySelector('.exp-error-2');
const cvcError = document.querySelector('.cvc-error');
const cvcError2 = document.querySelector('.cvc-error-2');


form.addEventListener('submit', (e) => {
    e.preventDefault();

});

inputName.addEventListener("input", (e) => {
    namE.textContent = e.target.value
});


inputNumber.toString().replace(/\d{4}(?=.)/g, '$& ')
inputNumber.addEventListener("input", (e) => {
    cardNumber.textContent = e.target.value.toString().replace(/\d{4}(?=.)/g, '$& ')


    var string = inputNumber.value;

    for (let i = 0; i < string.length; i++) {
        var keyCode = string[i];
        var regex = /[^a-z]/g;
        var isValid = regex.test(keyCode);
        console.log(isValid);
        if (!isValid) {
            cardError2.classList.add("show-card-error-2")

        } else {
            cardError2.classList.remove("show-card-error-2")
        }
    }

});

inputMonth.addEventListener("input", (e) => {
    month.textContent = e.target.value
    var string = inputMonth.value;

    for (let i = 0; i < string.length; i++) {
        var keyCode = string[i];
        var regex = /[^a-z]/g;
        var isValid = regex.test(keyCode);

        if (!isValid) {
            monthYear2.classList.add("show-exp-error-2")

        } else {
            monthYear2.classList.remove("show-exp-error-2")
        }
    }
});

inputYear.addEventListener("input", (e) => {
    year.textContent = e.target.value
    var string = inputYear.value;

    for (let i = 0; i < string.length; i++) {
        var keyCode = string[i];
        var regex = /[^a-z]/g;
        var isValid = regex.test(keyCode);
        if (!isValid) {
            monthYear2.classList.add("show-exp-error-2")

        } else {
            monthYear2.classList.remove("show-exp-error-2")
        }
    }
});


inputCvc.addEventListener("input", (e) => {
    cvc.textContent = e.target.value
    var string = inputCvc.value;

    for (let i = 0; i < string.length; i++) {
        var keyCode = string[i];
        var regex = /[^a-z]/g;
        var isValid = regex.test(keyCode);
        console.log(isValid);
        if (!isValid) {
            cvcError2.classList.add("show-cvc-error-2")

        } else {
            cvcError2.classList.remove("show-cvc-error-2")
        }
    }
});




function validation() {
    inputName.value === '' ? nameError.classList.add("show-name-error") || (inputName.style.border = '1px solid hsl(0, 100%, 66%)') : nameError.classList.remove("show-name-error") || (inputName.style.border = '1px solid #dfdee0');

    inputNumber.value === '' ? cardError.classList.add("show-card-error") || (inputNumber.style.border = '1px solid hsl(0, 100%, 66%)') : cardError.classList.remove("show-card-error") || (inputNumber.style.border = '1px solid #dfdee0');

    inputMonth.value === '' ? monthYear.classList.add("show-exp-error") || (inputMonth.style.border = '1px solid hsl(0, 100%, 66%)') : monthYear.classList.remove("show-exp-error") || (inputMonth.style.border = '1px solid #dfdee0');

    inputYear.value === '' ? (monthYear.classList.add("show-exp-error")) || (inputYear.style.border = '1px solid hsl(0, 100%, 66%)') : monthYear.classList.remove("show-exp-error") || (inputYear.style.border = '1px solid #dfdee0');

    inputCvc.value === '' ? (cvcError.classList.add("show-cvc-error")) || (inputCvc.style.border = '1px solid hsl(0, 100%, 66%)') : (cvcError.classList.remove("show-cvc-error")) || (inputCvc.style.border = '1px solid #dfdee0');

}

function check() {

    if (inputName.value.length > 3) {

        form.classList.add('hide-form');
        thankyou.classList.add('show-thank-you');

        if (inputNumber.value.length <= 0) {
            form.classList.remove('hide-form');
            thankyou.classList.remove('show-thank-you');
        }
        if (inputMonth.value.length <= 0) {
            form.classList.remove('hide-form');
            thankyou.classList.remove('show-thank-you');
        }

        if (inputYear.value.length <= 0) {
            form.classList.remove('hide-form');
            thankyou.classList.remove('show-thank-you');
        }
        if (inputCvc.value.length <= 0) {
            form.classList.remove('hide-form');
            thankyou.classList.remove('show-thank-you');
        }
    }

}

btn.addEventListener("click", () => {
    check()
    validation()
});


continueBtn.addEventListener('click', () => {
    location.reload();
    form.classList.remove('hide-form');
    thankyou.classList.remove('show-thank-you');

});