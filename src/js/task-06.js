const inputEl = document.querySelector('#validation-input')
console.log(inputEl)

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur (event) {
    if (inputEl.value.length <= 6) {
       inputEl.classList.add('valid')
       return
    } inputEl.classList.add('invalid')
console.log(inputEl.style.borderColor)

}



