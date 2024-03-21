import rl from 'readline-sync';

let operacao = rl.question('Digite a operacao desejada (+, -, *, /): ');
let num1 = rl.questionFloat('Digite o primeiro numero: ');
let num2 = rl.questionFloat('Digite o segundo numero: ');

switch(operacao){
    case '+':
        console.log(num1 + num2);
        break;

    case '-':
        console.log(num1 - num2);
        break;
    
    case '*':
        console.log(num1 * num2);
        break;

    case '/':
        console.log(num1 / num2);
        break;
    
    default:
        console.log('Operação indisponível.');
        break;
}