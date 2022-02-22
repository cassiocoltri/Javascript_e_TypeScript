const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala() { // Dentro de objetos criar FUNÇÂO não precisa da palavra "function", ()
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e minha idade atual é ${this.idade}.`); /* aqui o THIS esta referenciando APENAS o que esta dentro
        do objeto criado, e não o THIS padrão */
    },

    incrementaIdade() {
        this.idade++; // poderia ser colocado tb ++this.idade; Toda vez que for chamada a função vai aumentar um.
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();