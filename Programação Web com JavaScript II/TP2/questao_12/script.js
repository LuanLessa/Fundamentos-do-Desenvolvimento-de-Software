const nomeTime = prompt("Digite o nome do time de futebol:");
const vitorias = parseInt(prompt("Digite o número de vitórias:"));
const empates = parseInt(prompt("Digite o número de empates:"));
const derrotas = parseInt(prompt("Digite o número de derrotas:"));

function calcularPontuacao(nomeTime, vitorias, empates, derrotas) {
    const pontos = (vitorias * 3) + (empates * 1) + (derrotas * 0);
    const totalJogos = vitorias + empates + derrotas;
    const mediaPontos = totalJogos > 0 ? pontos / totalJogos : 0;

    console.log(`Time: ${nomeTime}`);
    console.log(`Total de pontos: ${pontos}`);
    console.log(`Média de pontos por jogo: ${mediaPontos.toFixed(2)}`);
}

calcularPontuacao(nomeTime, vitorias, empates, derrotas);