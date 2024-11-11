const pergunta = prompt("Digite a pergunta da enquete (sim ou não):");

const respostasEnquete = [];
let totalSim = 0;
let totalNao = 0;

do {
    const nome = prompt("Qual é o seu nome?");
    if (!nome) break;

    let resposta;
    do {
        resposta = prompt(pergunta + " (Sim ou Não)").trim().toLowerCase();
    } while (resposta !== "sim" && resposta !== "não");
    respostasEnquete.push({ nome, resposta });
    resposta === "sim" ? totalSim++ : totalNao++;
} while (true);

const totalRespostas = totalSim + totalNao;
const porcentagemSim = ((totalSim / totalRespostas) * 100).toFixed(2);
const porcentagemNao = ((totalNao / totalRespostas) * 100).toFixed(2);

alert(
    `Total de respostas: ${totalRespostas}\n` +
    `Sim: ${totalSim} (${porcentagemSim}%)\n` +
    `Não: ${totalNao} (${porcentagemNao}%)`
);

console.log("Respondentes e respostas:");
respostasEnquete.forEach((resposta) => {
    console.log(`Nome: ${resposta.nome}, Resposta: ${resposta.resposta}`);
});
