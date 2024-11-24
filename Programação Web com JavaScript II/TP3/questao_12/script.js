// Como a etapa 6 fala sobre recorrência de funções, resolvi utilizar recorrência.
function fib(n) { return n <= 1 ? n : n = fib(n - 1) + fib(n - 2); }
console.log(fib(20))