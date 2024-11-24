// Como a etapa 6 fala sobre recorrência de funções, resolvi utilizar recorrência.
function fat(n) { return n <= 1 ? n : n = n * fat(n - 1); }
console.log(fat(prompt("Digite um número inteiro: ")));