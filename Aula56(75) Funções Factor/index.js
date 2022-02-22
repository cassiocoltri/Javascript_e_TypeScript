// Funções Fabricas são Funções que retornam um Objeto.

function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        nomeCompleto() { // Podeira colocar o GET aqui também, assim ele poderia ser acessado como .nomeCompleto sem o "()""
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter: Setar uma informação:
        set nomeCompleto(valor) {
            valor = valor.split(' '); // Aqui ele esta separando os itens pelo "espaçamento" devolvento um Array
            this.nome = valor.shift(); // Aqui a variável this.nome esta pegando o "primeiro indice" do Array
            this.sobrenome = valor.join(' '); // Aqui a variável this.sobrenome esta "juntando(join)" o restante do Array.
        },

        fala: function (assunto) { // Quando se tem uma Função DENTRO do objeto se chama Método.
            return `${this.nome} esta ${assunto}.`; // o "THIS." equivale a variável que ele esta chamando. (Ex: p2.nome)
        },
        altura,
        peso,
        // Getter: Ele "converte" uma função/método como se fosse uma variavel normal.
        get imc() { // Aqui é outra função, porem NÃO precisaria por ": funcion", devido a nova atualização o ECMA
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
//    Argumentos:      nome  sobrenome   alt  peso
const p1 = criaPessoa('Luiz', 'Miranda', 1.80,  80);
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42);

// Esse console esta pedindo para a variável P2 executar a função "fala" que esta "chamando" um retorno, que no caso é uma frase.
console.log(p2.fala("Falando sobre JS.")); // Aqui o "this.nome" esta sendo como literalmente "p2.nome".

console.log(p1.imc); // Aqui estou pedindo para executar no P1 o IMC / Invocando aqui SEM o (). PQ ele esta simulando uma variavel
console.log(p2.nome, p2.imc); // Aqui pedindo o Nome e o IMC

//Aqui escrevendo o nome completo da pessoa com os argumentos:
console.log(p1.nome, p1.sobrenome);
p1.nomeCompleto = 'Maria Oliveira Silva';

console.log(p1.nome);
console.log(p1.sobrenome);