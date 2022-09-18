const textResult = document.querySelector(".result")
const buttonCheck = document.querySelector(".btn-check")
const buttonClear = document.querySelector(".btn-clear")

buttonCheck.addEventListener('click', check)
buttonClear.addEventListener('click', clearInput)


function isPalindrome(inputValue){
    const lengthOfTheString = inputValue.length

    for(let i = 0; i < lengthOfTheString/2 ; i++){
        if(inputValue[i] != inputValue[lengthOfTheString - 1 - i]){
            return false;
        }
    }

    return true;
}

function check(){
    const input = document.querySelector(".input-text")
    const inputValue = input.value

    if(inputValue === ""){
        textResult.innerText = "Write something in the text area"
    }else if(inputValue !== ""){
        if(isPalindrome(inputValue)){
            textResult.innerText = "It's a palindrome"
        }else{
            textResult.innerHTML = "It's not a palindrome"
        }
    }

}

function clearInput(){
    const input = document.querySelector(".input-text")
    input.value = ""
    textResult.innerText="Click the check button to see if the word is a palindrome"
}