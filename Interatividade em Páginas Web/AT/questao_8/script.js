const lista = document.getElementById("minhaLista");
const btnAlterarTexto = document.getElementById("alterarTexto");
const btnRemoverUltimo = document.getElementById("removerUltimo");
const btnAdicionarItem = document.getElementById("adicionarItem");

// Professor resolvi adicionar uma aleatoriedade na escolha do item a ser alterado para que o botão tenha um comportamento mais interessante.
btnAlterarTexto.addEventListener("click", () => {
    const totalItens = lista.children.length;
    if (totalItens > 0) {
        const indiceAleatorio = Math.floor(Math.random() * totalItens);
        const itemAleatorio = lista.children[indiceAleatorio];
        itemAleatorio.textContent = `Texto alterado no Item ${indiceAleatorio + 1}!`;
    } else {
        alert("A lista está vazia!");
    }
});

btnRemoverUltimo.addEventListener("click", () => {
    const ultimoItem = lista.lastElementChild;
    if (ultimoItem) {
        lista.removeChild(ultimoItem);
    } else {
        alert("A lista está vazia!");
    }
});

btnAdicionarItem.addEventListener("click", () => {
    const novoItem = document.createElement("li");
    novoItem.textContent = `Novo Item ${lista.children.length + 1}`;
    lista.appendChild(novoItem);
});
