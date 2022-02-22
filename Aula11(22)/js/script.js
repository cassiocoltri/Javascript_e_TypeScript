/*
Comandos na Pagina HTML:
alert(); ou window.alert(); -> Cria caixa de TEXTO popUp

window.confirm(); -> Cria caixa de confirmação de dados, OK e Cancel.
Retorna TRUE caso OK e FALSE quando cancelado.

window.prompt(); -> Caixa de testo para usuário digitar alguma conta.
Ele retorna o que foi digitado, e TUDO o que for retornado virá como STRING, mesmo números.
Para converter os numeros String, se usa as 3 tipos de funções:
variavel = parseInt(variavel); -> Aqui converte para INTEIROS
variavel = parseFloat(variavel); -> Aqui converte para DECIMAIS, numeros com ponto.
variavel = Number(varivel); -> Aqui ele converte geral, mais usado. o "Number" é com N maiusculo mesmo.

Exercicio EXECUTADO no Chrome.
*/

let num1 = prompt("Digite o primeiro numero");
let num2 = prompt("Digite o segundo número");

num1 = Number(num1);
num2 = Number(num2);

let resultado = num1 + num2;

alert(`O Resultado da soma dos dois numeros é ${resultado}`);