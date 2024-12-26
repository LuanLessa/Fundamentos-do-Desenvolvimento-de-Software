const botao = document.getElementById("meuBotao");
const paragrafo = document.getElementById("meuParagrafo");

botao.addEventListener("click", () => {
    console.log("Botão foi clicado!");

    // Alterar texto do botão
    if (botao.textContent === "Clique em mim!") {
        botao.textContent = "Clique novamente!";
    } else {
        botao.textContent = "Clique em mim!";
    }
});

paragrafo.addEventListener("mouseover", () => {
    paragrafo.classList.add("hover");
});

paragrafo.addEventListener("mouseout", () => {
    paragrafo.classList.remove("hover");
});
