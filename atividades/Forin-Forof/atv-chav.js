const pessoa = {
    nome: "Sofia",
    idade: 16,
    cidade: "Vilhena"
};

for(let chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`);
}