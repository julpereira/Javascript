class Veiculo{
    marca;
    modelo;
    ano;
    
    exibirDetalhes(){
        return`Marca: ${this.marca} \nModelo: ${this.modelo} \nAno: ${this.ano} \n ----------`
        
    }

}

let Carro = new Veiculo()

Carro.marca=  "Toyota";
Carro.modelo = "Corolla";
Carro.ano = 2022;


let Motocicleta = new Veiculo()

Motocicleta.marca = "Honda";
Motocicleta.modelo = "CBR 600RR";
Motocicleta.ano =  2021;

console.log(Carro.exibirDetalhes())
console.log(Motocicleta.exibirDetalhes())