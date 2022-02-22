//Reduce -> Redução do array.

// Some todos os números (Reduce).
// Retorne uma array com pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/* 1ª Arg: Acumulador inicia o valor que quiser, como nada foi colocado ele começara do ZERO.
   2ª Arg: valor, seria o que tem no Array.
   3ª Arg: Indice do array (posição).
   4ª Arg: Array propriamente dito.
*/
const total = numeros.reduce(function(acumulador, valor, index, array){
    return acumulador + valor;
}, 0); // Os argumentos vem depois das {} na função, colocado aqui 0 (ZERO) para iniciar o contador do 0.

console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 }, // Indice 0
    { nome: 'Maria', idade: 23 }, // Indice 1
    { nome: 'Eduardo', idade: 55 }, // Indice 2
    { nome: 'Leticia', idade: 10 }, // Indice 3
    { nome: 'Rosana', idade: 64 }, // Indice 4
    { nome: 'Wallace', idade: 63 } // Indice 5
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) {
        return acumulador;
    } else {
        return valor;
    }
}); // OBS: Como não foi colocado nenhum parametro para iniciar, ele começou do "Zero", ou seja, o primeiro indice do Objeto.

console.log(maisVelha);