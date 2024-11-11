const frase =
  "the only thing necessary for the triumph of evil is for good men to do nothing";

const palavras = frase.split(" ");
let fraseCapitalizada = "";

for (let index in palavras) {
  let palavra = palavras[index];
  palavras[index] = palavra.charAt(0).toUpperCase() + palavra.slice(1);
}

fraseCapitalizada = palavras.join(" ");

console.log(fraseCapitalizada);