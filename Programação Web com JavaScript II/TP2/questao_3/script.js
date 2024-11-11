const numerosA = [1, 2, 3];
const numerosB = [4, 5, 6];
const numerosC = [7, 8, 9];

const todosNumeros = [...numerosA, ...numerosB, ...numerosC];

let somaTotal = 0;

for (num of todosNumeros) {
    somaTotal += num;
}

console.log("A soma de todos os números dos vetores é:", somaTotal);