function saudacao (nome) {
    return `Bom dia ${nome}!` // função pode ou não retornar, depende do que for usado.
}

function saudacao2 (nome) {
    console.log(`Boa tarde ${nome}!`)
}

const variavel = saudacao("Luiz");
console.log(variavel);
saudacao2("Caneda");

// Funcao anonima, pode fazer uma variável receber uma funcao:
const raiz = function(n) {
    return n ** 0.5;
};

// Simplificado com a => Arrow
const raiz2 = n => n ** 0.5;

console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));

// ---------------------------------------------
//Factorin - "Função Construtora"
function criarPessoa (nome, sobrenome, idade) { // Parâmentros
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

// Mesma função porem "reduzida"
function criarPessoa2 (nome, sobrenome, idade) { // Parâmentros
    return { nome, sobrenome, idade }; //JS aceita desta forma, não precisaria colocar: nome: nome como exemplo.
};



const pessoa1 = criarPessoa("Luiz", "Miranda", 25); // Argumentos
const pessoa2 = criarPessoa("Maria", "Joaquina", 55);
const pessoa3 = criarPessoa("João", "Paulo", 34);
const pessoa4 = criarPessoa("Pedro", "Oliveira", 12);
const pessoa5 = criarPessoa("Alexandro", "Boneti", 56);

const turma = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5];

console.log(turma);