const decrementBtnEl = document.querySelector('[data-action = "decrement"]')
console.log(decrementBtnEl);

const incrementBtnEl = document.querySelector('[data-action="increment"]')
console.log(incrementBtnEl);

let counterValue = document.querySelector('#value')
console.log(counterValue);

decrementBtnEl.addEventListener('click', (click) => {
   counterValue.textContent = Number(counterValue.textContent) -1 
})

incrementBtnEl.addEventListener('click', ()=>{
    counterValue.textContent = Number(counterValue.textContent) +1
})


