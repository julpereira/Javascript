import rl from 'readline-sync';

let num = rl.questionInt('Digite um numero: ')
let cont = 0;
while (cont <= 10){
    let resultado = num * cont;
    console.log(`${num} x ${cont} = ${resultado}`)
    cont++;
}