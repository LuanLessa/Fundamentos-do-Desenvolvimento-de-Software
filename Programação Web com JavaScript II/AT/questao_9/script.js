// Professor vamos mais com calma ae, o Sr. ta com muita maldade no coração, esse é o bloco de entrada ainda lol

let numeros = [1, [7, 2, [1, 2, 3, [4, [5, [4, 2, 6, [7, [8, [1, 2, 3, 9, [1, 10]]]]]]]]]];

function reduzirVetor(arr) {
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(reduzirVetor(val)) : acc.concat(val);
    }, []);
}

let numerosAchados = reduzirVetor(numeros);

let soma = numerosAchados.reduce((acc, num) => acc + num, 0);

console.log(`A soma de todos os números é: ${soma}`);
