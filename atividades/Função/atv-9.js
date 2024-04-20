import rl from 'readline-sync';

// Declaração de função
function validarSenha(senha) {
    if (senha.length < 8) {
        return false;
    }
    return true;
}

let senha = rl.question('Digite sua senha: ');
if (validarSenha(senha)) {
    console.log("A senha é válida!");
} else {
    console.log("A senha não atende aos critérios.");
}

// Expressão de função
const vs = function(senha) {
    return senha.length >= 8;
};
senha = rl.question('Digite sua senha: ');
if (vs(senha)) {
    console.log("A senha é válida!");
} else {
    console.log("A senha não atende aos critérios.");
}

// Função de seta
const vas = (senha) => senha.length >= 8;
senha = rl.question('Digite sua senha: ');
if (vas(senha)) {
    console.log("A senha é válida!");
} else {
    console.log("A senha não atende aos critérios.");
}
