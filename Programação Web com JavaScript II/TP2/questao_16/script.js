let incremento;
let contador = 0;
do {
    incremento = parseInt(prompt("Informe o valor do incremento (entre 1 e 10):"), 10);
    if (incremento < 1 || incremento > 10 || isNaN(incremento)) {
        alert("Por favor, digite um número válido entre 1 e 10.");
    }
} while (incremento < 1 || incremento > 10 || isNaN(incremento));

while (true) {
    contador += incremento;
    console.log(`Contador: ${contador}`);
    const continuar = prompt("Deseja continuar incrementando o contador? (Sim/Não)");
    if (continuar.toLowerCase() === "não" || continuar.toLowerCase() === "nao") {
        break;
    }
}

alert(`Valor final do contador: ${contador}`);
