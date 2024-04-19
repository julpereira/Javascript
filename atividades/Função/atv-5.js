import rl from 'readline-sync';

// Declaração de função
function ValorDesconto(original, percentual){
    return original * percentual / 100 ;
}

let original = parseInt(rl.question('Digite o valor do produto: '));
let percentual = parseInt(rl.question('Digite o percentual de desconto: '));
console.log(`O valor após o desconto é de: R$${ValorDesconto(original, percentual)},00`);

// Expressão de função

const vd = function(original, percentual){return ValorDesconto(original, percentual)};
console.log(`${vd(original, percentual)}`);

// Função de seta

const VD = (original, percentual) => ValorDesconto(original, percentual);
console.log(`${VD(original, percentual)}`);
