let algunsNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosDobrados = [];

for (let numero of algunsNumeros) {
    numerosDobrados.push(numero << 1);
}

console.log(numerosDobrados);