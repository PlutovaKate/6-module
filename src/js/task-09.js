
const bodyColor = document.querySelector('.widget')
const buttonEl = document.querySelector('.change-color')
const spanColorEl = document.querySelector('.color')
console.log(spanColorEl.textContent)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonEl.addEventListener('click', onChangeColor)

function onChangeColor (event) {
  const color = getRandomHexColor()
  spanColorEl.textContent = color
  bodyColor.style.backgroundColor = color
  
}
