//Resumo de Objetos.

// {} = "Corpo do objeto" Obj são envolvidos em " {chaves} "

// Aqui criação de um Objeto LITERAL
const pessoa = { // Aqui início do corpo/escopo
    nome: 'Luiz', // Aqui par "chave/valor"
    sobrenome: 'Otavio' // Aqui par "chave/valor"
}; // Final do corpo/escopo

//Usando método "." para acessar (anotação de ponto).
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

console.log('------------------------------------------------------');

//Usando metodo [] para acessar: (anotação de colchete)
//Caso existe um caso de não saber o nome exato, em casos de prog muito grande ou paginas de internet, dá de receber por variavel.
const chave = 'nome';
console.log(pessoa[chave]); // Vai dar na MESMA, pq estou colocado uma variável, mas ele acessa um nome da chave.
console.log(pessoa['sobrenome']);

console.log('------------------------------------------------------');

//----Usando como função construtora NEW:

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 30;
//Lembrete: Pode-se ter funções/métodos dentro dos obj.
//Da de fazer/usar o .this pois ele esta referenciando o objeto.
pessoa1.falarNome = function () {
    return (`${this.nome} esta falando seu nome.`); // Usando o this. ele esta automaticamente acessando dentro do obj
}

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.falarNome());

console.log(pessoa1.getDataNascimento());

console.log('------------------------------------------------------');

// Usando Factoring Function

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() { // Não precisa colocar o GET. Sem o GET vc ativa com o "()".
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto); //Não precisa do () para "ativar". Caso não usar o GET, tem que usar o "()".

console.log('------------------------------------------------------');

// Usando Constructor Fuction: Se cria com a 1ª letra Maiuscula

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = `${this.nome} ${this.sobrenome}`;
}

/* O que o NEW faz:
    1ª Ele cria um {} vazio
    2ª Ele atrela o this. ao objeto criado.
    3ª O return já esta implícito ao this.
*/

const p2 = new Pessoa('Maria', 'Pitanga'); // Quando se usa a Constructor, não pode esquecer do "NEW"
Object.freeze(p2); // Aqui "TRAVEI" essa variável, ela não vai ser mais alterada por fora.

console.log(p2); // Ele mostra quem é o contrutor. Na primeira aba. De onde veio ou quem foi o molde.
console.log(p2.nomeCompleto);
