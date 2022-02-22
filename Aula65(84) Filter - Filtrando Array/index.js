//Filter -> Vai sempre retornar um array com a mesma quantidade de elementos ou menos...

//Retorne os números maiores que 10:
// índice:       0   1   2  3  4  5...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const maiorQueDez = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 10) {
        maiorQueDez.push(numeros[i]);
    }
}
console.log(maiorQueDez);

//Usando Filter: Filter retorna valor Booleano, ou é verdadeiro ou falso.
function callbackFilter(valor) { // Aqui ele retorna "valor, indice e array" na ordem de argumentos.
    return valor > 10; // Vai retornar TRUE caso o "valor" (o que esta dentro da variável) for maior que 10.
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

//Método mais simplificado: Jogar a função dentro do filter.
const numerosFiltrados2 = numeros.filter(function(valor){
    return valor > 10;
});
// Usando com ARROW:
const numerosFiltrados3 = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados2);
console.log(numerosFiltrados3);

console.log("-----------------------------------------------------------------");

//Retorne as pessoas que tem o nome com 5 letras ou mais.
//Retorne as pessoas com mais de 50 anos.
//Retorne as pessoas cujo nome termina com A.

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50);
/*No caso abaixo, foi colocado o "toLowerCase() para deixar tudo em minusculo, e a funcao ".endsWitch()" vai pegar o ultimo
elemento e comprar ao "a" que queria saber.
*/
const pessoasNomeTerminacomA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDe50Anos);
console.log(pessoasNomeTerminacomA);