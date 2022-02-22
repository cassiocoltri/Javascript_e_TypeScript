//Declaração de Função (Function hoisting)
//Hoisting é que o "motor"(engine) no JS "joga" todas as funções, var, para cima e roda. Então tanto faz a ordem da função.

falaOi(); // Posso chamar ela tanto acima como abaixo do código. Essa é a versão classica de funções.

function falaOi() {
    console.log("Oie.");
}
// First-class object (Objetos de primeira classe)
// Function expression -> Dá de TRATAR uma função como um Dado naturalmente.
const souUmDado = function () { // Variáveis PODEM receber funções. Muito comum isso em programação.
    console.log("Sou um Dado.");
};

function executaFuncao(funcao) { // É possível criar uma função que receba outra função.
    funcao(); // Dá de jogar uma função dentro de outra função para executar.
}
executaFuncao(souUmDado);

// Arrow Function (Forma resumida com "return" já incluso. Sem precisar declarar.)
const funcaoArrow = () => {
    console.log("Sou uma Arrow Function!");
};
funcaoArrow();

// Dentro de um Objeto:
const obj = {
    falar() { // criado uma função só colocando o "()" pq em uma atualização nova aceita isso.
//  falar: funcion () { -> Esse era o método antigo de fazer isso.
        console.log("Estou falando...");
    }
}
obj.falar();