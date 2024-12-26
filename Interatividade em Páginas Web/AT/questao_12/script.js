const input = document.getElementById("novaTarefa");
const botaoAdicionar = document.getElementById("adicionarTarefa");
const listaTarefas = document.getElementById("listaTarefas");

botaoAdicionar.addEventListener("click", () => {
    const tarefa = input.value.trim();
    if (tarefa === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const itemLista = document.createElement("li");

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = tarefa;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("remover");

    botaoRemover.addEventListener("click", () => {
        listaTarefas.removeChild(itemLista);
    });

    itemLista.appendChild(textoTarefa);
    itemLista.appendChild(botaoRemover);

    listaTarefas.appendChild(itemLista);

    input.value = "";
    input.focus();
});
