//Return
//Retorna um valor.
//Termina a função.

//Exemplo: 01
function soma (a,b) {
    return a + b; // aqui ele Retorna com algum VALOR.
}
console.log(soma(2,5));

// Exemplo acima é DIFERENTE!! do de baixo, apenas de fazerem a "mesma" coisa. Um retorna resultado e outro mostra apenas.
function soma2 (a,b) {
    console.log(a + b); // Aqui ele esta apenas "mostrando" o resultado, NÃO retorna valor algum.
}
soma2(4,6);

//Exemplo 02: Função retornando um OBJETO literal.
function criaPessoa (nome, sobrenome) {
    return { nome, sobrenome };
}
const p1 = criaPessoa('Luiz', 'Otavio'); // Variável recebendo uma função que retorna um objeto criado.
const p2 = { // essa variável esta recebendo a MESMA coisa que a "p1", porem sem retorno de uma função.
    nome: 'João',
    sobrenome: 'Miranda'
};

console.log(p1);
console.log(p2);
// OBS: Nesse caso, mais fácil fazer uma variável receber a "função criadora" do que digitar 200 mil pessoas uma por uma o codigo.

//Exemplo 03: Função dentro de uma função retornando.

function falaFrase (comeco) { //(Passo #3) Agora essa função esta recebendo tudo o que tinha na (Passo #2) e (Passo #1)
    function falaResto (resto) { //(Passo #1) Essa func esta retornado o que tem no "começo" + "resto" da função.
        return comeco + ' ' + resto;
    }
    return falaResto; //(Passo #2) Esse retunr esta pegando tudo do "falaresto" que pegou as informações inicias antes.
}

const fala = falaFrase('Ola'); // Aqui a variável esta recebendo uma função inicial.
const resto = fala('Mundo!'); // Essa função esta recebendo o que sera executado da 1ª função + o que vem da 2ª interna funcao
console.log(resto); // Retornando "Ola" (da func falaFrase()) + "Mundo" (da func fala()) que esta recebendo outro parâmetro.

//Exemplo 04: Enclasuramento

function criaMultiplicador(multiplicador) { // receber um argumento numérico
    return function(n) { // Aqui esta retornando uma Função anônima que vai receber o argumento (n)
        return n * multiplicador // aqui vai retornar argumento (n) * qualquer arqugmento que eu quiser...
    };
}

const duplo = criaMultiplicador(2); // retornando n * 2
const triplo = criaMultiplicador(3); // retornando n * 3
const quadruplo = criaMultiplicador(4); // retornando n * 4

console.log(duplo(2)); // 2 x 2
console.log(triplo(2)); // 2 x 3
console.log(quadruplo(2)); // 2 x 4