/* 
Valores Primitivos (Imutaveis/Não da de modificar eles): Resumidamente eles são Valores COPIADOS!
String, Number, boolean, undefinit, null (bigInt, symbol) - Valor.
*/
// index    0123
let nome = "Luiz";
nome[0] = "R"; // Não da de alterar/Mutar, exemplo de Valor primitivel (se fosse um Array daria).
console.log(nome[0], nome);

// Outro exemplo:
let a = "A"; // primeira info, onde a variável b esta pegando.
let b = a; // copia
console.log(a,b);

a = "Outra coisa"; // aqui mudou a variável, mas no "b = a" não mudou a referencia, pq é uma copia e esta pegando a 1ª info.
console.log(a,b);

//-----------------------------------
/*Dados por Fererência: MUtaveis -> Array, objetc, funcion
*/
let a1 = [1,2,3];
let b1 = a1; // aqui não é uma copia pq ele esta pegando a "referencia", de onde o array esta salvo. Aceita alteração.
console.log(a1, b1);

a1.push(4); // aqui tanto o a1 como o b1 sofreram alteração.
console.log(a1, b1);

b1.pop() // mesmo retirando um elento do b1, ele alerou tb o a1 pq eles tem a mesma referência.
console.log(a1,b1);

// Outro Exemplo, porem com dados SALVOS igualmente no array:
let a2 = [1,2,3];
let b2 = [...a2]; // Aqui ele fez uma copia, e NÃO sofrera as mesmas alterações, chamado SPREAD (espalhar).
let c = b2;

a2.push(4); // Adicionado 4 no array
b2.pop(); // Retirado um item do array
console.log("\n",a2, b2); // Aqui o b2 não sofreu a alteração do a2 pq ele tinha uma cópia, e não a referencia.
console.log(c); // O "c" sofreu alteração pq ele esta referenciando o b2.

// Exemplo com Objetos:
const x = {
    nome: "Cassio",
    sobrenome: "Coltri"
}
const y = {...x} // Feito a copia com o SPREAD, ele não esta mais por referência.

x.nome = "Bonitão"; // Aqui tanto o X como o Y sofrem alteração.
console.log(x);
console.log(y);