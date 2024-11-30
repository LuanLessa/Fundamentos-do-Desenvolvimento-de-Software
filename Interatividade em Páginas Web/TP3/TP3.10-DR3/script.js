function adicionarLinha() {
    const tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];

    const novaLinha = tabela.insertRow();

    const celula1 = novaLinha.insertCell(0);
    const celula2 = novaLinha.insertCell(1);
    const celula3 = novaLinha.insertCell(2);
    const celula4 = novaLinha.insertCell(3);

    celula1.innerHTML = "Ana";
    celula2.innerHTML = "28";
    celula3.innerHTML = "Belo Horizonte";
    celula4.innerHTML = "Designer";

    novaLinha.style.backgroundColor = "#f0f0f0";
}
