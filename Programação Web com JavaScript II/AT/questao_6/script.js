let numeros = [3, 1, 2, 5];
let contagens = [];

for (let numero of numeros) {
    let subVetor = [];

    for (let i = 1; i <= numero; i++) {
        subVetor.push(i);
    }

    contagens.push(subVetor);
}

console.log(contagens);
