function validarCPF(cpf) {
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    return regexCPF.test(cpf);
}

class InvalidCPFError extends Error { }

let cpf = prompt("Digite um CPF no formato 000.000.000-00:");

if (!validarCPF(cpf)) {
    throw new InvalidCPFError("O CPF informado é inválido.");
}

console.log("O CPF informado é válido!");