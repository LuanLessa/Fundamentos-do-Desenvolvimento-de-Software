function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    this.mostrarDetalhes = function () {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    };
}

const carro1 = new Carro("Toyota", "Corolla", 2022);
const carro2 = new Carro("Honda", "Civic", 2023);
const carro3 = new Carro("Ford", "Focus", 2021);

console.log("Detalhes dos carros:");
carro1.mostrarDetalhes();
carro2.mostrarDetalhes();
carro3.mostrarDetalhes();
