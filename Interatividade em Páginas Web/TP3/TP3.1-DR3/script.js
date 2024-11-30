function adicionarListaItem() {
    const ul = document.querySelector("ul");
    const index = ul.querySelectorAll("li").length + 1;

    const item = document.createElement("li");

    item.innerText = `Novo Item ${index}`
    item.id = `novoitem${index}`
    ul.appendChild(item);

    if (index === 10) {
        alert(`Foi criado o Novo Item ${index}`)
    }
}

const btn = document.querySelector("button");
btn.addEventListener("click", adicionarListaItem);