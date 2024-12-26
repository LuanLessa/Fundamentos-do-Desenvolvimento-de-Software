// Professor o enunciado está um pouco consufo, do jeito que está escrito eu entendi que existem 3 classes css, sendo elas: caixa, ativa e inativa.
// O que eu fiz foi criar uma div com a classe caixa e um botão que ao ser clicado alterna entre as classes ativa e inativa.
// Já a classe caixa ficou sem utilidade, pois foi solicitado logo no início do enunciado que ela fosse removida.

const caixa = document.querySelector(".caixa");
const botao = document.createElement("button");

caixa.classList.add("ativa");
caixa.classList.remove("caixa");

botao.textContent = "Alternar Classe";
document.body.appendChild(botao);

botao.addEventListener("click", () => {
    if (caixa.classList.contains("ativa")) {
        caixa.classList.remove("ativa");
        caixa.classList.add("inativa");
    } else {
        caixa.classList.remove("inativa");
        caixa.classList.add("ativa");
    }
});
