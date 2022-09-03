const spanHexCode = document.querySelector(".hex-code")
const body = document.querySelector("body")
const btn = document.querySelector(".generate")

function generateRandomHexCode(){
    let hexCode = Math.random().toString(16).substring(2,8);
    hexCode = "#" + hexCode

    spanHexCode.innerHTML = hexCode;
    body.style.backgroundColor = hexCode
}

btn.addEventListener("click", generateRandomHexCode)