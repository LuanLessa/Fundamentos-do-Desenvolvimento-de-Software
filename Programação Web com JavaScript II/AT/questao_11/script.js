let frase = "toda ciência seria supérflua se houvesse coincidência imediata entre a aparência e a essência das coisas";

let quantidadeA = frase.split("").filter(letra => letra === "a").length;

console.log(`Quantidade de letras "a": ${quantidadeA}`);