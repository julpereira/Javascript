import rl from 'readline-sync';

let salario = rl.questionFloat('Digite o seu salario:');
let boni = rl.question('Escolha a sua bonificacao (A, B, C ou D):');


switch(boni){
    case A:
        console.log(5 / salario *100);
        break;

    case B:
        console.log(10 / salario *100);
        break;
}