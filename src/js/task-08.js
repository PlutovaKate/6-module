const logiFormEl = document.querySelector('.login-form')

logiFormEl.addEventListener('submit', onButtonSubmit)

function onButtonSubmit (event) {
    event.preventDefault()

const email = document.querySelector('[type="email"]').value
const password = document.querySelector('[type="password"]').value 


const formData = {
    email,
    password,
    
}

console.log(formData)

   if(email === '' || password === ''){
   return alert('Будь ласка заповніть усі поля!')
}
    
event.currentTarget.reset()  

}
