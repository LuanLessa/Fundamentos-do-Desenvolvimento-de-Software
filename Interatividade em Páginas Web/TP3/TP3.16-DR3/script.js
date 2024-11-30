const lista = document.getElementById("lista");

lista.addEventListener("click", () => {
    const acreLi = Array.from(lista.children).find(li => li.innerText === "Acre");

    if (acreLi) {
        acreLi.innerText = "Amapá";
        acreLi.style.backgroundColor = "blue";
    }
});
