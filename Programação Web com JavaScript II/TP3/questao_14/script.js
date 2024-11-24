function ordemCrescente(x, y, z) { return [x, y, z].sort((a, b) => a - b); }
const n1 = prompt("Digite um valor: ");
const n2 = prompt("Digite um valor: ");
const n3 = prompt("Digite um valor: ");

console.log(ordemCrescente(n1, n2, n3))