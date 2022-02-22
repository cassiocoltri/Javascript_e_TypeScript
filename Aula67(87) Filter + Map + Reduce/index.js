// Retorne a soma do dobro de todos os pares.

// -> Filtrar os Pares
// -> Dobrar os Valores.
// -> Reduzir (somar todos)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter(function(valor){
    return valor % 2 === 0;
})

const dobrarValor = numeros.map(function(valor){
    return valor * 2;
})

const somarTodos = numeros.reduce(function(acumulador, valor){
    return acumulador + valor;
})

const dobroDosPares = numerosPares.map(function(valor){
    return valor * 2;
})

const somaDosDobroDosPares = dobroDosPares.reduce(function(acumulador,valor){
    return acumulador + valor;
})

//console.log(numerosPares);
//console.log(dobrarValor);
//console.log(somarTodos);
//console.log(dobroDosPares);
//console.log(somaDosDobroDosPares);

// Fazer método tudo INIFICADO (Mais simples e menos códigos.):

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Todos convertidos em ARROW!
const numerosPares2 = numeros
    .filter(valor => valor % 2 === 0) // Retornando se são Pares
    .map(valor => valor * 2) // Retornando o Dobro dos Pares
    .reduce((ac,valor) => ac + valor) // Retornando a Soma dos pares.
    //OBS: Na função arrow do ".reduce" se coloca os argumentos em () quando tem mais de um. ((arg, arg) => valor)

console.log(numerosPares2);