function ehPalindromo(str) {
    let textoInvertido = "";
    let i = str.length - 1;
    while (i >= 0) {
        textoInvertido += str.charAt(i--);
    }
    return str === textoInvertido
}

console.log(ehPalindromo("ovo"));
console.log(ehPalindromo("asa"));
console.log(ehPalindromo("ovo"));
console.log(ehPalindromo("teste"));