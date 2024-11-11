const quantidadeNumeros = parseInt(prompt("Quantos números você deseja sortear?"));

function sortearNumeros(quantidade) {
    const numerosSorteados = [];

    for (let i = 0; i < quantidade; i++) {
        const numero = Math.ceil(Math.random() * 60);
        numerosSorteados.push(numero);
    }

    console.log("Números sorteados:", numerosSorteados.join(", "));
}

sortearNumeros(quantidadeNumeros);
