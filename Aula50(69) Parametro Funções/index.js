function funcao () { // Nada foi passado, aqui de argumento.
    console.log(arguments); /* Esse "arguments" funciona Únicamente para a FUNCTION, não funciona na arrow, ele "guarda" tudo
 o que é informação dentro de uma espécie de arraw. Um cache dele mais ou menos...*/
}
funcao("Teste",1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9); // Todas as declarações ou informações foram para o CACHE "arguments".

// Argumento que sustenta todas as informações enviadas.
//Exemplo 01:
function funcao01(a,b,c) { // Mesmo colocando limite, ele salva o "restante" no arguments
    let total = 0;
    for (let i of arguments) {
        total += i
    };
    console.log(total);
};
funcao01(1,2,3,4,5,6,7,8,9,10); // Aqui o a:1 b:2 c:3 porem o restante tb foi jogado no arguments. Mesmo não declarados.

//Exemplo 02: Caso inverso, função com MAIS argumentos do que recebido no final.
function funcao02 (a,b,c,d,e,f) { // Recebido 6 (SEIS) argumentos...
    console.log(a,b,c,d,e,f);
};
funcao02(1,2,3); // Recebido 3 (TRÊS) argumentos, o resto vai ficar setado como "undefined"

//Exemplo 03:
function funcao03 (a, b = 2, c = 4) { // Aqui "setado" valor padrão para "b", caso nada for lançado ele vai "pegar" o 2.
    console.log(a + b + c);
}
funcao03(2,50); // Aqui foi lançado um valor para o "b", caso não existisse, ele assumiuria o 2 e retornaria 4 (2+2).
funcao03(2, undefined, 20); // Se for lançado UNDEFINED ele assume o valor padrão, é a UNICA forma de fazer isso!
funcao03(2,'',20); // Tentado deixar em "branco" porem ele vai entender como "concatenação", vai resultar 220(2+20 literal)...

/*OBS: Caso não tivesse sido setado o valor do "b", ele resultaria em "NaN" caso fosse colocado "somaDois(2)" pois se tem apenas
o primeito argumento, o segundo vai "somar NADA" por isso voltaria como NaN */

//Exemplo 04: Com "destruturação" na função OBJETO.
function funcao04({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
funcao04({nome: 'Luiz', sobrenome: 'Otavio', idade: 20}); // Lançado argumento Literal como objeto.

//Exemplo 05: Com destruturação com ARRAY
function funcao05 ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao05(['Luiz Otavio', 'Miranda', 30]);

//Exemplo 06 (Forma pratica)
//              (+)(-)(*)(/)   totalAcumulado       resto valores
function funcao06 (operador,       acumulador,      ...numeros) { // usa-se os '...' para pegar "restante" das informações.
    for(let numero of numeros) {
        // IF "simples" podem ficar em UMA linha apenas.
        if (operador === '+') acumulador += numero; // Aqui vai receber os valores em numeros (rest...) como SOMA.
        if (operador === '-') acumulador -= numero; // Aqui vai receber os valores em numeros (rest...) como SUBTRAÇÃO.
        if (operador === '*') acumulador *= numero; // Aqui vai receber os valores em numeros (rest...) como MULTIPLICAÇÃO.
        if (operador === '/') acumulador /= numero; // Aqui vai receber os valores em numeros (rest...) como DIVISÃO.
    }
    console.log(acumulador);
};
//Indices 0   1  2  3   4   5...
funcao06("+", 0,    20, 30, 40, 50); // Aqui o acumulador (indice 1) esta recebendo "0"(zero) como ponto de partida
funcao06("+", 100, 20, 30, 40, 50); // Aqui o acumulador (indice 1) esta recebendo como "100"(cem) como ponto de partida.
funcao06("-", 0, 20, 30, 40, 50);
funcao06("*", 1, 20, 30, 40, 50);

/*
OBS: Daria para colocar toda essa função dentro de uma const ou variável. Porem ficaria assim:

const funcao06 = function (operador, acumulador, ...numeros) { 
    for(let numero of numeros) {
        // IF "simples" podem ficar em UMA linha apenas.
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador.toFixed(2));    
}

funcao06("*", 1, 20, 30, 40, 50);
*/
