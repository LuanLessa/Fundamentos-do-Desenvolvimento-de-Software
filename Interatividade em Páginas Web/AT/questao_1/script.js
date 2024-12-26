// Definição do objeto "Carro"
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,

    mostrarDetalhes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    },

    ligar() {
        console.log("O carro está ligado!");
    }
};


console.log("Propriedades do carro:");
carro.mostrarDetalhes();
carro.ligar();
