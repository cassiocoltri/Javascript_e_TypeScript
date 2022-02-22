//Funções construtoras criam novos objetos.
// Funções contrutoras devem iniciar com Letras Maiusculas, Não é regra, mas um Concensso geral.
// Por padrão funcção com nome Maiusculo se sabe como contrutora.
//Funções Construtores NÃO precisa de "," (virgula). Pode escrever normalmente o código. 

//Exemplo 01:
function Pessoa (nome, sobrenome) {
    //Atrivutos ou métodos Privados: Posso colocar atributos "secretos" ou que não sejam acessiveis pelo "this."
    const ID = 123456;
    const metodoInterno = function(){
    }

    // Atributos ou métodos Públicos: Dá de acessar dentro da função construtora com o "this." ou "anotação de ponto".
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() { // Dá de criar funções dentro tb.
        console.log(this.nome + ': sou um médoto');
    }
}
// Função acima é Como um "MOLDE", para "replicar" vamos usar o NEW:

//              func   nome     sobrenome
const p1 = new Pessoa("Luiz", "Miranda");
const p2 = new Pessoa("Maria", "Francisca");

p2.metodo(); // Tanto faz p1 ou p2, ele vai executar quem eu chamar.
console.log(p1.nome);
console.log(p2.sobrenome);

//Resumidamente, a palavra NEW vai criar (retornar) um novo objeto com as mesmas atribuições do MOLDE inicial.
// Funções construtoras NÃO precisam do "return", ele esta já implícito.