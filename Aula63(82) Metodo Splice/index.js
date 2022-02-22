//Metodo/Função SPLICE ele funcioa para todos os tipos de atributos como:
//push, pop, shift, unshift etc...

// Indice:       0         1        2          3          4
// Indice Neg   -5        -4       -3         -2         -1
const nomes1 = ['Maria', 'João', 'Edu', 'Gabriel', 'Julia'];
const nomes2 = ['Maria', 'João', 'Edu', 'Gabriel', 'Julia'];
const nomes3 = ['Maria', 'João', 'Edu', 'Gabriel', 'Julia'];
const nomes4 = ['Maria', 'João', 'Edu', 'Gabriel', 'Julia'];
const nomes5 = ['Maria', 'João', 'Edu', 'Gabriel', 'Julia'];
const nomes6 = ['Maria', 'João', 'Edu', 'Gabriel', 'Julia'];


//Primeiro campo (1ª) do argumento é da "onde" vai começar a função.
//Segundo campo (2ª) do argumento é "quantos elementos" vão ser excluidos/separados.
//Terceiro campo (3ª) do argumento em diante é o que vai ser acrescentado, cada acréscimo se poe uma virgula.
//                1ª      2ª       3ª...
// nomes.splice(indice, delete, elemento1, elemento2...etc)

//Simulando o ".pop": 
//Só usar o "variavel.splice(-1, 1)", ele vai pegar o ultimo e tirar um elemento.

nomes1.splice(4, 1); // Aqui vai pegar a partir do 4 indice (julia) e remover 1 (aqui seria Julia tb).
//OBS: Funçao splice retorna em um Array o resultado. Assim pode-se armazenar mais de um item.
const removidos2 = nomes2.splice(3, 2); // Aquia a Julia e Gabriel foram jogada em outro array, se tirar + elementos vai igualmente
//OBS 2: Existe um comando "Number.MAX_VALUE" -> Que vai até o numero maximo existente na programação.

const removidos3 = nomes3.splice(3, 0, 'Luiz'); // Aqui, ele vai pegar a partir do indice 3 (Gabriel) e acrescentar o "Luiz"
console.log(nomes3); // Virou: [ 'Maria', 'João', 'Eduardo', 'Luiz', 'Gabriel', 'Julia' ]

//Simulando o Shift:
const removidos4 = nomes4.splice(0, 1); // Aqui começar da Maria e tirar ela.
console.log(nomes4);

//Simulando Push:
nomes5.splice(Number.MAX_VALUE, 0, 'Juquinha'); // Ele vai a partir do Ultimo item, não tirar ninguém e adicionar o "Juquinha".
console.log(nomes5);

//Simlando o Unshift:
nomes6.splice(0, 0, 'Ze', 'Napa'); // Vai pegar a partir do primeiro elemento, não deletar nada e acrescentar.
console.log(nomes6);