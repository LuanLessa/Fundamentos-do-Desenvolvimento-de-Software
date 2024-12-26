const textos = [
    "Gostaria de enfatizar que a contínua expansão de nossa atividade pode nos levar a considerar a reestruturação do sistema de participação geral.",
    "Todavia, o entendimento das metas propostas talvez venha a ressaltar a relatividade do fluxo de informações.",
    "É importante questionar o quanto a determinação clara de objetivos não pode mais se dissociar do impacto na agilidade decisória.",
    "Pensando mais a longo prazo, a mobilidade dos capitais internacionais pode nos levar a considerar a reestruturação de todos os recursos funcionais envolvidos.",
    "Evidentemente, a complexidade dos estudos efetuados prepara-nos para enfrentar situações atípicas decorrentes dos métodos utilizados na avaliação de resultados.",
    "As experiências acumuladas demonstram que o surgimento do comércio virtual acarreta um processo de reformulação e modernização dos níveis de motivação departamental.",
    "A prática cotidiana prova que a estrutura atual da organização apresenta tendências no sentido de aprovar a manutenção das formas de ação.",
    "O empenho em analisar o consenso sobre a necessidade de qualificação maximiza as possibilidades por conta das condições inegavelmente apropriadas.",
    "Não obstante, o desafiador cenário globalizado oferece uma interessante oportunidade para verificação dos métodos utilizados na avaliação de resultados.",
    "Do mesmo modo, a contínua expansão de nossa atividade afeta positivamente a correta previsão dos paradigmas corporativos."
];

const botao = document.querySelector("button");
const container = document.querySelector("section");

botao.addEventListener("click", () => {
    const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
    container.textContent = textoAleatorio;
});
window.onload = () => { botao.click() }; // Professor resolvi adicionar essa linha para que á página já carregue com um texto aleatório, deu a entender que de certa forma esse exercício é um clone do próprio lero lero.