const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));
const valor3 = parseFloat(prompt("Digite o terceiro valor:"));

const somarValores = (a, b, c) => a + b + c;

console.log(`A soma dos três valores é: ${somarValores(valor1, valor2, valor3)}`);
