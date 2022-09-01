const count = document.querySelector(".counter")
// const subtractButton = document.querySelector('.subtract')
// const resetButton = document.querySelector(".reset")
// const addButton = document.querySelector(".add")
const buttons = document.querySelector(".container-buttons")

buttons.addEventListener("click", (event) => {
    if (event.target.classList.contains("add")){
        count.innerHTML++
        setCounterColor()
    }
    else if (event.target.classList.contains("subtract")){
        count.innerHTML--
        setCounterColor()
    }
    else if (event.target.classList.contains("reset")){
        count.innerHTML = 0
        setCounterColor()
    }
})


function setCounterColor(){
    if(count.innerHTML > 0){
        count.style.color = "lightgreen"
    }else if(count.innerHTML < 0){
        count.style.color = "red"
    }else{
        count.style.color = "white"
    }
}



// addButton.addEventListener("click", () => {
//     count.innerHTML++
// })

// subtractButton.addEventListener("click", () => {
//     count.innerHTML--
// })

// resetButton.addEventListener("click", () => {
//     count.innerHTML = 0
// })