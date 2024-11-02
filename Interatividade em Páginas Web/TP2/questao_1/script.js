function redirecionar() {
    alert("Você será redirecionado!");
    return window.location.href = "https://www.infnet.edu.br/infnet/home/";
}

const button = document.getElementById("btn-redirecionar");
button.addEventListener("click", redirecionar);