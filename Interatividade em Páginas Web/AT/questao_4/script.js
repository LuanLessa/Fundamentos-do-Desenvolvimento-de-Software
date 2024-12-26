const lista = document.getElementById("lista");
const primeiroItem = lista.firstElementChild;
const ultimoItem = lista.lastElementChild;
const novoItem = document.createElement("li");

novoItem.textContent = "Item 4 (Novo Item)";
lista.appendChild(novoItem);

// Apenas para comprovar que os acessos funcionaram
primeiroItem.style.color = "red";
ultimoItem.style.color = "blue";