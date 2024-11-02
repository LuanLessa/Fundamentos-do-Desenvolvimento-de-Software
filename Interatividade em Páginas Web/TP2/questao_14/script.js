const body = document.querySelector("body");
const tabela = document.createElement("table");
const botao = document.createElement("button")
botao.type = "button";
botao.textContent = "Trocar";


for (let i = 0; i < 2; i++) {
    const linha = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
        const celula = document.createElement("td");

        if ((i + j) % 2 === 0) {
            celula.classList.add("azul");
            celula.textContent = `Item Azul (${i}, ${j})`;
        } else {
            celula.classList.add("vermelho");
            celula.textContent = `Item Vermelho (${i}, ${j})`;
        }

        linha.appendChild(celula);
    }
    tabela.appendChild(linha);
}

body.appendChild(tabela);
body.appendChild(botao);

function alternarClassesTabela() {
    const celulas = document.querySelectorAll("td");

    celulas.forEach(celula => {
        celula.classList.toggle("azul");
        celula.classList.toggle("vermelho");
    });
}

botao.addEventListener("click", alternarClassesTabela);