import rl from 'readline-sync';

// Declaração de função
function ParImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
let numero = rl.question('Digite um numero: ');
console.log(`${ParImpar(numero)}`);

// Expressão de função

const ParouImpar = function(numero){ return ParImpar(numero)};
console.log(`${ParouImpar(numero)}`);    

// Função de seta 

const num = (numero) => ParImpar(numero);
console.log(`${num(numero)}`);


