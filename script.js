
let arslan = ()=> {
    let btn = document.querySelector('.btn')
    let input = document.querySelector('.input')
    let msg = document.querySelector('.error-msg')

    
    if (!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        btn.style.backgroundColor = "hsl(234, 29%, 20%)"
        msg.style.display = 'block'
        btn.disabled = true;
        console.log("no")
        input.classList.toggle('active');
        return false;
    }
    btn.disabled = false;
    btn.style.backgroundColor = "hsl(4, 100%, 67%)"
    msg.style.display = 'none'
    
    console.log("yes")
      return true;


}

let btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
let container = document.querySelector('.main-container')
container.style.display = 'none'
let success = document.querySelector('.success-container')
success.style.display = 'flex'
let input = document.querySelector('.input');
let email = document.getElementById('email');
email.innerHTML = input.value
})
let btn2 = document.querySelector('.btn2')
btn2.addEventListener('click',()=>{
    let container = document.querySelector('.main-container')
container.style.display = 'flex'
let success = document.querySelector('.success-container')
success.style.display = 'none'
 })
