let algunsNumeros = [
  1, 2, 3, 5, 7, 8, 9, 13, 17, 20, 21, 303, 1001, 1002, 1003,
];
let i = 0;

function ehPrimo(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

while (i < algunsNumeros.length) {
  ehPrimo(algunsNumeros[i]) ? i++ : algunsNumeros.splice(i, 1);
}

console.log(algunsNumeros);
