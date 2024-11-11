const texto = prompt("Digite uma palavra ou frase:")
let textoInvertido = "";
let i = texto.length - 1;

while (i >= 0) {
    textoInvertido += texto.charAt(i--);
}

alert(textoInvertido);