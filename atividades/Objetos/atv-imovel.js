class Imovel{
    quartos;
    tipo;
    endereco;
    
    exibirInformacoes(){
        return`Quartos: ${this.quartos} \nTipo: ${this.tipo} \nEndereço: ${this.endereco} \n ----------`
        
    }

}

let Casa = new Imovel()

Casa.quartos= 4
Casa.tipo = "Casa"
Casa.endereco = "Rua da Amizade, 789 - Bairro Alegre" 


let Apartamento = new Imovel()

Apartamento.quartos = 2
Apartamento.tipo = "Apartamento"
Apartamento.endereco =  "Avenida da paz, 123 - Centro"

console.log(Casa.exibirInformacoes())
console.log(Apartamento.exibirInformacoes())