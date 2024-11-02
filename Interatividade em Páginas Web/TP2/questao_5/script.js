const body = document.querySelector("body");
const lista = document.createElement("ul");
const itens = ["Item 1", "Item 2", "Item 3", "Item 4"];

itens.forEach((itemTexto) => {
    const item = document.createElement("li");
    item.textContent = itemTexto;

    item.style.backgroundColor = "#f0f0f0";
    item.style.color = "#333";
    item.style.fontFamily = "Arial, sans-serif";
    item.style.border = "1px solid #ddd";
    item.style.padding = "10px";
    item.style.margin = "5px 0";

    lista.appendChild(item);
});

body.appendChild(lista);
