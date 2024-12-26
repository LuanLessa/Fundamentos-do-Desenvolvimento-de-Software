const botao = document.getElementById("meuBotao");

botao.addEventListener("mouseover", () => {
    botao.style.backgroundColor = "lightblue";
    botao.style.color = "white";
});

botao.addEventListener("mouseout", () => {
    botao.style.backgroundColor = "lightgray";
    botao.style.color = "black";
});

botao.addEventListener("mousedown", () => {
    botao.textContent = "Alterado";
});
