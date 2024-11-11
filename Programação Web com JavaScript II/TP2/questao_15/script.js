let incremento;
let contador = 0;
do {
    incremento = parseInt(prompt("Informe o valor do incremento (entre 1 e 10):"), 10);
    if (incremento < 1 || incremento > 10 || isNaN(incremento)) {
        alert("Por favor, digite um número válido entre 1 e 10.");
    }
} while (incremento < 1 || incremento > 10 || isNaN(incremento));

while (contador <= 50) {
    console.log(`Contador: ${contador}`);
    contador += incremento;
}

console.log("Contagem finalizada!");
