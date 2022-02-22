//Função Geradoras são diferentes de contrutoras.
//Func Geradoras podem devolver algum resultado sem precisar rodar toda a aplicação. Bom para performace em programas grandes.
//Como o nome diz, ele "Gerencia" as funcionalidades da função.

//Função geradores tem um * no nome.
//Ex 01:

function* geradora1 () {
    //Cod qualquer...
    yield 'valor1'; // No lugar de RETURN ele usa "YIELD"
    //Cod qualquer...
    yield 'valor2';
    //Cod qualquer...
    yield 'valor3';
}

const g1 = geradora1();
console.log(g1);
//para acessar a informação, tem que colocar o "next()"
console.log(g1.next()); // Cada vez que eu "rodar" ele vai para o próximo valor, aqui ele vai entregar o "valor1"
console.log(g1.next()); // aqui ele vai entregar o "valor2" pq é a segunda vez que ele roda, logo pega o "proximo/next" comando.
console.log(g1.next().value); // colocando o comando ".value" vai pegar o valor que tem expecífico. // Aqui pegar "valor3" só isso.
//Obs: Ele executa tb a chave "done: FALSE ou TRUE", no caso ele valida se existe outro codigo ou comando.
//Caso de FALSE, significa que ele ainda tem coisa a "rodar", caso ele dê TRUE, significa que ele terminou tudo e pula fora.

//FOR tb funciona nesses casos:
const g1teste = geradora1();
for (let valor of g1teste) { // Para cada "valor" dentro do função ele vai mostrar o resultado.
    console.log(valor);
}
console.log('-----------------------------------------------------------');
//------------------------------------------------------------------------------------------

//Exemplo 02: (Gerador com Loop) Dessa forma, dá de colocar uma repetição sem limite, ela roda apenas quando executada.

function* geradora2() {
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value); //0
console.log(g2.next().value); //1
console.log(g2.next().value); //2
console.log(g2.next().value); //3
console.log(g2.next().value); //4
console.log('-----------------------------------------------------------');

//--------------------------------------------------------------------------------------------

//Exemplo 03 (Gerador com delegação de tarefa)

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); // Com o yield* ele esta puxando as informações da geradora3 e executando depois.
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}
console.log('-----------------------------------------------------------');

//Exemplo 05:

function* geradora5() {
    yield function () {
        console.log('Vim do y1');
    };

    // ...
    
    yield function () {
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();