const n1 = prompt("Digite um valor: ");
const n2 = prompt("Digite um valor: ");
const n3 = prompt("Digite um valor: ");
const n4 = prompt("Digite um valor: ");
const n5 = prompt("Digite um valor: ");
const lista = [n1, n2, n3, n4, n5];

function listaRaiz(arr) { return arr.map((n) => Math.sqrt(n)) }
const raiz = listaRaiz(lista);
console.log(raiz);