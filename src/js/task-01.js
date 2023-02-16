const listEl = document.querySelectorAll('.item')
const listLength = listEl.length
console.log(`Number of categories: ${listLength}`)

const h2El = [...listEl].map((item)=> {
    const catagorylist = item.firstElementChild.textContent
    console.log(`Category: ${catagorylist}`)
    console.log(`Elements: ${item.children[1].children.length}`)
    
})
