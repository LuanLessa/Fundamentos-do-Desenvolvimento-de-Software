// Função para inicializar o acordeão
function inicializarAcordeao() {
    const items = document.querySelectorAll(".accordion-item");

    items.forEach(item => {
        const title = item.querySelector(".accordion-title");

        title.addEventListener("click", () => {
            // Se o item já estiver aberto, feche-o
            if (item.classList.contains("active")) {
                item.classList.remove("active");
            } else {
                // Fecha todos os outros itens
                items.forEach(i => i.classList.remove("active"));

                // Abre o item clicado
                item.classList.add("active");
            }
        });
    });
}

// Chama a função para inicializar o acordeão ao carregar a página
window.onload = inicializarAcordeao;
