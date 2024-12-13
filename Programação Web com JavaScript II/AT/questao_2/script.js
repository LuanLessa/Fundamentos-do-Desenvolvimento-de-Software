let planetas = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno", "Plutão", "Ceres"];

planetas.splice(planetas.indexOf("Terra"), 1);

planetas.splice(planetas.indexOf("Urano"), 1, "Terra");

let indiceMarte = planetas.indexOf("Marte");
let indiceJupiter = planetas.indexOf("Júpiter");
let marte = planetas.splice(indiceMarte, 1)[0];
let jupiter = planetas.splice(indiceJupiter - 1, 1)[0];
planetas.splice(indiceJupiter - 1, 0, jupiter, marte);

console.log(planetas);
