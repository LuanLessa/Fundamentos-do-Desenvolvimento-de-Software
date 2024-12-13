const tuplas = [[3, 5], [7, 1], [6, 8], [4, 9], [2, 3], [8, 1], [5, 7], [9, 6], [1, 4], [2, 8]];

const tuplasFiltradas = tuplas.filter(([a, b]) => (a % 2 === 0 && b % 2 !== 0) || (a % 2 !== 0 && b % 2 === 0));

const somas = tuplasFiltradas.map(([a, b]) => a + b);

console.log(somas);
