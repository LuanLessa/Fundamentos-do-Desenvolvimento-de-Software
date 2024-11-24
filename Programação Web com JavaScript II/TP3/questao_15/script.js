// Como a etapa 6 fala sobre recorrência de funções, resolvi utilizar recorrência.
function fat(n) { return n <= 1 ? n : n = n * fat(n - 1); }

const body = document.querySelector("body");
const p = document.createElement("p");
p.textContent = fat(prompt("Digite um número inteiro: ")).toString()
body.appendChild(p);