let planetas = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Terra", "Urano", "Netuno", "Plutão", "Ceres"];

let indicePrimeiroTerra = planetas.indexOf("Terra");
planetas.splice(indicePrimeiroTerra - 1, 1);

let indiceUltimoTerra = planetas.lastIndexOf("Terra");
planetas.splice(indiceUltimoTerra - 1, 1);

console.log(planetas);
