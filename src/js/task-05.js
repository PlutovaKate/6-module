const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', onInputChange)
console.log(outputEl.textContent)

function onInputChange (event) {
  if (event.currentTarget.value === '') {
    outputEl.textContent = 'Anonymous'
    return
  }
    outputEl.textContent = event.currentTarget.value
  
}

