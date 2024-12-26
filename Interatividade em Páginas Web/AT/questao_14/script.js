const API_URL = "https://fakestoreapi.com/products";

const produtosContainer = document.getElementById("produtos");

async function fetchProdutos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Erro ao buscar produtos");
        }

        const produtos = await response.json();
        exibirProdutos(produtos);
    } catch (error) {
        console.error("Erro:", error);
        produtosContainer.innerHTML = "<p>Erro ao carregar os produtos. Tente novamente mais tarde.</p>";
    }
}

function exibirProdutos(produtos) {
    produtosContainer.innerHTML = "";
    produtos.forEach((produto) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${produto.image}" alt="${produto.title}">
            <h2>${produto.title}</h2>
            <p>${produto.description.slice(0, 100)}...</p>
            <span>R$ ${produto.price.toFixed(2)}</span>
        `;

        produtosContainer.appendChild(card);
    });
}

fetchProdutos();