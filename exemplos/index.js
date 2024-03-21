import entradaDados  from 'readline-sync';

let nome =  entradaDados.question('Digite seu nome: ');
console.log(`Olá, ${nome}.`);

let x = entradaDados.questionInt('X: ');
let y = entradaDados.questionInt('Y: ');
//let total = Number(x) + Number(y);
console.log(`Total: ${x+y}`);

let idade = 15
if(idade >=18){
    console.log("Maior de idade");
}
else{
    console.log("Menor de idade")
}

if (idade >= 16) console.log("Pode votar")