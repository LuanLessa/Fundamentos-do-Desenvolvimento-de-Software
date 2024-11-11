const algunsCarros = [
  ["Kwid", "Renault"],
  ["Polo", "Volkswagen"],
  ["S10", "Chevrolet"],
  ["March", "Nissan"],
  ["Civic", "Honda"],
  ["Tracker", "Chevrolet"],
  ["T-Cross", "Volkswagen"],
  ["Gol", "Volkswagen"],
  ["Duster", "Renault"],
  ["Onix", "Chevrolet"],
  ["Argo", "Fiat"],
  ["Kicks", "Nissan"],
  ["Fit", "Honda"],
  ["Fiorino", "Fiat"],
  ["Cronos", "Fiat"],
  ["Sandero", "Renault"],
  ["Versa", "Nissan"],
  ["HR-V", "Honda"],
  ["Virtus", "Volkswagen"],
  ["Uno", "Fiat"],
];

const contagemPorMarca = {};

for (let i = 0; i < algunsCarros.length; i++) {
  const marca = algunsCarros[i][1];
  if (contagemPorMarca[marca]) {
    contagemPorMarca[marca]++;
  } else {
    contagemPorMarca[marca] = 1;
  }
}

let mensagem = "Quantidade de carros por marca:\n";
for (const marca in contagemPorMarca) {
  mensagem += `${marca}: ${contagemPorMarca[marca]}\n`;
}

alert(mensagem);

console.log("Quantidade de carros por marca:");
for (const marca in contagemPorMarca) {
  console.log(`${marca}: ${contagemPorMarca[marca]}`);
}