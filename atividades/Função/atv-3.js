import rl from 'readline-sync';

// Declaração de função
function somar(a, b){
    return a + b;
}
let a = parseInt(rl.question('Digite: '));
let b = parseInt(rl.question('Digite: '));
let resultado = somar(a, b);

console.log(resultado);

// Expressão de função

const Soma = function(a, b){return somar(a, b)};
console.log(`${Soma(a, b)}`);

// Função de seta

const mais = (a, b) => somar(a, b);
console.log(`${mais(a, b)}`);