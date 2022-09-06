const modal = document.querySelector(".modal")
const close = document.querySelector(".close")
const btnModal = document.getElementById("btn")

close.addEventListener("click", () => {
    modal.style.display = "none"
})

btnModal.addEventListener("click", (event) => {
    event.preventDefault()
    modal.style.display = "block"
})