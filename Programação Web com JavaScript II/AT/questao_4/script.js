let nome;

while (!nome || nome.trim() === "") {
    nome = prompt("Digite seu nome:");
}

console.log(`Nome digitado: ${nome}`);
