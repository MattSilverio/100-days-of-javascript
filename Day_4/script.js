const modal = document.querySelector(".modal")
const close = document.querySelector(".close")
const btnModal = document.getElementById("btn")

btnModal.addEventListener("click", openModal)
close.addEventListener("click", closeModal)


function openModal(event){
    event.preventDefault()
    modal.style.display = "block"
}

function closeModal () {
    modal.style.display = "none"
}