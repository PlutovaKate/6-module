const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')


inputEl.addEventListener('input', handleChange)
function handleChange (event) {
    textEl.style.fontSize = inputEl.value + 'px'
}