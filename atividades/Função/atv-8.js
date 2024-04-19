import rl from 'readline-sync';

// Declaração de função
function IMC(altura, peso){
    return peso / (altura * altura);
}

let altura = parseFloat(rl.question('Digite a altura: '));
let peso = parseFloat(rl.question('Digite o peso: '));
console.log(`IMC: ${IMC(altura, peso)}`);

// Expressão de função
const I = function(altura, peso) { return peso / (altura * altura) };
console.log(`IMC: ${I(altura, peso)}`);

// Função de seta
const M = (altura, peso) => peso / (altura * altura);
console.log(`IMC: ${M(altura, peso)}`);
