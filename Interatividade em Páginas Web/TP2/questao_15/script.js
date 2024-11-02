function criarTabela() {
    const tabelaContainer = document.getElementById("tabelaContainer");

    const tabela = document.createElement("table");

    const cabecalho = document.createElement("tr");
    cabecalho.innerHTML = "<th>Nome</th><th>Nota</th><th>Ação</th>";
    tabela.appendChild(cabecalho);

    const alunos = [
        { nome: "Aluno 1", nota: 7 },
        { nome: "Aluno 2", nota: 4 },
        { nome: "Aluno 3", nota: 5 },
        { nome: "Aluno 4", nota: 3 }
    ];

    alunos.forEach(aluno => {
        const linha = document.createElement("tr");

        const colunaNome = document.createElement("td");
        colunaNome.textContent = aluno.nome;
        linha.appendChild(colunaNome);

        const colunaNota = document.createElement("td");
        colunaNota.textContent = aluno.nota;
        colunaNota.classList.add("nota");
        linha.appendChild(colunaNota);

        const colunaBotao = document.createElement("td");
        const botao = document.createElement("button");
        botao.textContent = "Verificar Nota";

        botao.addEventListener("click", () => verificarNota(linha, aluno.nota));
        colunaBotao.appendChild(botao);
        linha.appendChild(colunaBotao);

        tabela.appendChild(linha);
    });

    tabelaContainer.appendChild(tabela);
}

function verificarNota(linha, nota) {
    if (nota >= 5) {
        linha.classList.add("verde");
        linha.classList.remove("vermelho");
    } else {
        linha.classList.add("vermelho");
        linha.classList.remove("verde");
    }
}

window.onload = criarTabela;
