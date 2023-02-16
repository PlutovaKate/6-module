const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('#ingredients')

const liList = ingredients.map((ingredient)=>{
  const itemEl = document.createElement('li')
  itemEl.textContent = ingredient
  itemEl.classList.add('item')
  
  return itemEl
  
})
ulList.append(...liList)




