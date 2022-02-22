//Para unir ou concatenar os dois arrays, se usa o .contat(), do contrario ele retornaria como uma string
const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = a1.concat(a2);
const a4 = a1 + a2; // ESSA FORMA É A ERRADA! Não vai dar certo e vai retornar uma string literal.

//Da de acrescetar mais conisas juntas no concat: Ele vai retornar um OBJETO!
const a5 = a1.concat(a2, [7,8,9], 'Juquinha', 'Mariazinha');

console.log(a4);
console.log(a3);
console.log(a5);

//Outra forma que usando o ...spread, mesma coisa que o concat, porem mais simples.
const a6 = [...a1, ...a2]; // Aqui estou pedando o "resto" do a1 e do a2, no caso todo o argumento e jogando no a6.

//Dá de jogar qulaquer coisa nele tb.
const a7 = [...a1, 'Luiz Bacana', ...a2, ...[7, 8, 9] ]; //Aqui jogado até um Array Literal [7,8,9], porem para pegar os valores usa o '...'
console.log(a6);
console.log(a7);