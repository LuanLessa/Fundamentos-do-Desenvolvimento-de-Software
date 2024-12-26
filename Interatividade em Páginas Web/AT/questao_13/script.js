const formulario = document.getElementById("formWhatsapp");
const inputTelefone = document.getElementById("telefone");
const inputMensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const telefone = inputTelefone.value.trim();
    const mensagem = inputMensagem.value.trim();

    if (!/^\d+$/.test(telefone)) {
        alert("Por favor, insira um número de telefone válido (apenas números).");
        return;
    }

    const urlWhatsapp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsapp, "_blank");
});
