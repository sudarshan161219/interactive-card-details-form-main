const cardNumber = document.querySelector(".heading");
const namE = document.querySelector(".paragraph-1");
const month = document.querySelector(".monthh");
const  year = document.querySelector(".yearr");
const cvc = document.querySelector(".cvc-details");


const inputName = document.querySelector(".input-name");
const inputNumber = document.querySelector(".input-card-number");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");
const inputCvc = document.querySelector(".input-cvc");
const form = document.querySelector('.form');

const btn = document.querySelector(".btn");


const nameError = document.querySelector('.name-error');
const cardError = document.querySelector('.card-error');
const monthYear = document.querySelector('.exp-error');
const cvcError = document.querySelector('.cvc-error');
// const nameError = document.querySelector('.name-error');

form.addEventListener('submit', (e) => {
	e.preventDefault();

});

inputName.addEventListener("input", (e) => {
 namE.textContent = e.target.value 
} );


inputNumber.value.toString().replace(/\d{4}(?=.)/g, '$& ')
inputNumber.addEventListener("input", (e) => {
cardNumber.textContent = e.target.value.toString().replace(/\d{4}(?=.)/g, '$& ')
 } );
 
inputMonth.addEventListener("input", (e)=>{
month.textContent = e.target.value 
} );

inputYear.addEventListener("input", (e)=>{
    year.textContent = e.target.value 
 } );
    

 inputCvc.addEventListener("input", (e)=>{
    cvc.textContent = e.target.value 
 } );


function validation(){

   if(inputName.value === ''){
      inputName.style.border = '1px solid hsl(0, 100%, 66%)'
   }else{
      inputName.style.border = '1px solid #dfdee0'
   }


   if(inputNumber.value === ''){
      inputNumber.style.border = '1px solid hsl(0, 100%, 66%)'
   }else{
      inputNumber.style.border = '1px solid #dfdee0'
   }


   if(inputMonth.value === '' || inputYear.value === ''){
      inputMonth.style.border = '1px solid hsl(0, 100%, 66%)'
      inputYear.style.border = '1px solid hsl(0, 100%, 66%)'
   }else{
      inputMonth.style.border = '1px solid #dfdee0'
      inputYear.style.border = '1px solid #dfdee0'
   }

   if(inputCvc.value === ''){
      inputCvc.style.border = '1px solid hsl(0, 100%, 66%)'
   }else{
      inputCvc.style.border = '1px solid #dfdee0'
   }

inputName.value === '' ?  nameError.classList.add("show-name-error") : nameError.classList.remove("show-name-error");  

inputNumber.value === '' ? cardError.classList.add("show-card-error") : cardError.classList.remove("show-card-error");

inputMonth.value === '' ?  monthYear.classList.add("show-exp-error") : monthYear.classList.remove("show-exp-error");

inputYear.value === '' ?  monthYear.classList.add("show-exp-error") : monthYear.classList.remove("show-exp-error");

inputCvc.value === '' ? cvcError.classList.add("show-cvc-error") : cvcError.classList.remove("show-cvc-error");


    
}


 btn.addEventListener("click", () => {


   validation()

 })