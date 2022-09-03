const number = document.querySelector(".number")
const btn = document.querySelector(".btn") 

function generateRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 1000)
    number.innerHTML = randomNumber
}

btn.addEventListener("click", generateRandomNumber)

