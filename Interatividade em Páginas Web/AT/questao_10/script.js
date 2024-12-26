window.onload = () => {
    console.log("Página totalmente carregada!");

    const language = navigator.language;
    const url = window.location.href;

    document.getElementById("language").textContent = `Idioma do navegador: ${language}`;
    document.getElementById("url").textContent = `URL da página: ${url}`;
};

const observer = new MutationObserver(() => {
    const languageText = document.getElementById("language").textContent;
    const urlText = document.getElementById("url").textContent;

    if (languageText && urlText) {
        // Professor tive que adicionar um setTimeout para que desse tempo de exibir as informações ná página antes do alert e do redirecionamento.
        // Não sei se é a melhor forma de fazer isso, mas foi a única que consegui pensar.
        setTimeout(() => {
            alert("As informações foram inseridas na página com sucesso!");

            window.location.href = "https://www.infnet.edu.br";
        }, 1000);
    }
});

observer.observe(document.getElementById("info"), {
    childList: true,
    subtree: true,
    characterData: true,
});
