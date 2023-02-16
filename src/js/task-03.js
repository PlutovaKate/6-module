const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulEl = document.querySelector('.gallery')
// 1й вариант
images.map((image)=>{
  const liEl = document.createElement('li')
  liEl.style.listStyle = 'none'
  ulEl.append(liEl)
  
  const imgEl = document.createElement('img')
  imgEl.src = image.url
  imgEl.alt = image.alt
  imgEl.style.width = '300px'
  
  liEl.append(imgEl)

})

//2 вариант - так лучше не делать, так как єтот вариант может стирать всё
// ulEl.innerHTML += `<li>
// <img src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// alt ='White and Black Long Fur Cat' width = 300px>
// </li>
// <li><img src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// alt ='Orange and White Koi Fish Near Yellow Koi Fish' width = 300px></li>
// <li><img src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// alt ='Group of Horses Running' width = 300px></li>`

//3й вариант
// const galleryCard = images.map((image)=>{
// return `<li>
//   <img 
//   src = '${image.url}'
//   alt = '${image.alt}'
//   width = 300px
//   />
// </li>`;
// }).join(' ')

// ulEl.insertAdjacentHTML('afterbegin', galleryCard)


// console.log(galleryCard)



