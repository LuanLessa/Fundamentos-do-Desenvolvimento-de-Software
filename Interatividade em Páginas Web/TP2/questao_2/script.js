function inserir() {
    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = `A educação é a chave para desbloquear o potencial de cada indivíduo e construir um futuro próspero.<br>A tecnologia é uma ferramenta poderosa para melhorar a qualidade da educação e torná-la acessível a todos.<br>Bill Gates`;
    paragrafo.style.backgroundColor = "yellow";
    paragrafo.style.color = "blue";

    return document.body.appendChild(paragrafo);
}

const button = document.getElementById("btn-inserir");
button.addEventListener("click", inserir);