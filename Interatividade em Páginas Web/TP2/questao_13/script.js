const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("close");

function showModal() {
    modal.classList.remove("hide");
}

function hideModal() {
    modal.classList.add("hide");
}

openModalButton.addEventListener("click", showModal);
closeModalButton.addEventListener("click", hideModal);
