// Professor eu tive que usar um proxy pois eu tive problemas com CORS
const API_URL = "https://dadosabertos.camara.leg.br/api/v2/deputados";
const PROXY_URL = "https://api.allorigins.win/get?url=";

const deputadosContainer = document.getElementById("deputados");
const buscaInput = document.getElementById("busca");
const buscarButton = document.getElementById("buscar");

async function fetchDeputados() {
    try {
        const response = await fetch(PROXY_URL + encodeURIComponent(API_URL));
        if (!response.ok) {
            throw new Error("Erro ao buscar dados da API");
        }

        const data = await response.json();
        const deputadosData = JSON.parse(data.contents).dados;
        return deputadosData || [];
    } catch (error) {
        console.error("Erro:", error);
        return [];
    }
}

function exibirDeputados(deputados, limite = 3) {
    deputadosContainer.innerHTML = "";

    const deputadosExibir = limite ? deputados.slice(0, limite) : deputados;

    deputadosExibir.forEach((deputado) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${deputado.urlFoto}" alt="${deputado.nome}">
            <h2>${deputado.nome}</h2>
            <p>Partido: ${deputado.siglaPartido}</p>
            <p>Estado: ${deputado.siglaUf}</p>
        `;

        deputadosContainer.appendChild(card);
    });

    if (deputadosExibir.length === 0) {
        deputadosContainer.innerHTML = "<p>Nenhum deputado encontrado.</p>";
    }
}

function filtrarDeputados(deputados, termo) {
    return deputados.filter((deputado) =>
        deputado.nome.toLowerCase().includes(termo.toLowerCase())
    );
}

buscarButton.addEventListener("click", async () => {
    const termoBusca = buscaInput.value.trim();
    const todosDeputados = await fetchDeputados();

    if (termoBusca) {
        const deputadosFiltrados = filtrarDeputados(todosDeputados, termoBusca);
        exibirDeputados(deputadosFiltrados, 0);
    } else {
        exibirDeputados(todosDeputados);
    }
});

(async () => {
    const deputados = await fetchDeputados();
    exibirDeputados(deputados);
})();
