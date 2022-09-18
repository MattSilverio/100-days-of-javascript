const textResult = document.querySelector(".result")
const buttonCheck = document.querySelector(".btn-check")
const buttonClear = document.querySelector(".btn-clear")


buttonCheck.addEventListener('click', check)
buttonClear.addEventListener('click', clearInput)

function check(){
    const input = document.querySelector(".input-text")
    const inputValue = input.value.toLowerCase()
    let vowelCounter = 0;

    for(let i = 0; i< inputValue.length; ++i){        
        if( inputValue.charCodeAt(i) === 97 ||
            inputValue.charCodeAt(i) === 101 ||
            inputValue.charCodeAt(i) === 105 ||
            inputValue.charCodeAt(i) === 111 ||
            inputValue.charCodeAt(i) === 117){

                ++vowelCounter;
            }
        
    }

    textResult.innerText = `${input.value} has ${vowelCounter} vowels`
    
}



function clearInput(){
    const input = document.querySelector(".input-text")
    input.value = ""
    textResult.innerText="Click the check button to see how many vowels do you hava"
}