let produto;
const lista = [];

do {
    produto = prompt("Digite o nome do produto:");
    if (produto) {
        let preco;
        do {
            preco = parseFloat(prompt("Digite o preço do produto:"));
            isNaN(preco) && alert("Digite um valor válido!");
        } while (isNaN(preco));
        lista.push(produto, preco);
    };
} while (produto);

if (lista.length !== 0) {
    let mensagem = ``;
    for (let i = 0; i < lista.length; i++) {
        mensagem += `${lista[i]} - R$: ${lista[++i]}\n`
    }
    alert(mensagem);
}