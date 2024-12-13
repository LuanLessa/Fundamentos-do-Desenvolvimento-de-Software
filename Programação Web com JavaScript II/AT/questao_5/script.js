let tuplas = [[3, 7], [5, 2], [8, 4], [1, 9], [6, 3]];

let soma = 0;

for (let [a, b] of tuplas) {
    soma += a + b;
}

console.log(`A soma de todos os números é: ${soma}`);
