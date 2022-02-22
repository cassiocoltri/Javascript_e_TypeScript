//Resumo de Array, são dados/valores por fererência.

//Array são indexsáveis e tem como fazer alteração: Forma mais LITERAL
const nomes = ["Eduardo", "Maria", "Batata"];

// Trocando um valor:
nomes[2] = "Fritas"; // Trocado o "Batata" por "fritas".
// Da de deletar e não perder o "tamanho" do array, ele fica com um buraco.
delete nomes[2]; //aqui deletando o "fritas".

console.log(nomes);

//Usando como "Construtor" (pouco usado) dá na mesma coisa que as funlões de cima.
const nomes2 = new Array('Eduardo', 'Jandira', 'Sabuga');
nomes2[2] = 'Jurere';
delete nomes2[2];
console.log(nomes2);

//Exemplo usando um Spread.
//Quando se cria um Array, e coloca uma vairável para receber desse array ele se mantem as informações.
const nomes3 = ['Tomate', 'Milho', 'Cenoura'];
const novo = nomes3 // Aqui estou atribuindo o novo para ter a mesma REFERENCIA do nomes3.
novo[2] = 'Couve'; // Aqui, tanto o novo[2] como o nomes3[2] foram alterados. Pois estão com a mesma referencia.
//Mesma coisa com comandos POP entre outros.
console.log(novo, nomes3);

//Para NÃO alterar, dá de usar um spread [...]
const novo2 = [...nomes3]; // Aqui ele esta recebendo os dados do nomes3 porem não esta igual, criou uma COPIA.
novo2[2] = 'canjica'; // Aqui vai só alterar o novo, não o nomes3.
console.log(novo2, nomes3);

//Dá de separa uma string e jogar numa array:
const nome4 = 'Cassio Ronconi Coltri';
const novoNome = nome4.split(' '); /* Esse comando vai gerar um ARRAY que "separou" pelo elemento de " " (espaço),
porem daria para coloar qualquer coisa. Como virgutas, ponto, numero, letra etc... é o elemento que ele vai separar */
console.log(novoNome);

//Mesma coisa para "unir" uma Array em uma string:
const nome5 = ['Romeu', 'Gatão', 'Bonitão'];
const novoNome2 = nome5.join(' ');
console.log(novoNome2);