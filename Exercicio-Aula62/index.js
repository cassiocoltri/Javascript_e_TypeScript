/* 
Escreva uma função que receba um número e retorne:
Se numero for divisivel por 3 = Fizz
Se numero for divisivel por 5 = Buzz
Se numero for divisivel por 3 e 5 == FizzBuzz

Caso ele não for divisivel por 3 e 5, retorna o próprio número.
Checar se o numero é um numero

Obs: Use números de 0 a 100.
*/

function divisivel (num) {    
    if (typeof num != "number") { // Aqui testando se o argumento é tipo Numero ou Number.
        return console.log(`${num}`);
    }

    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else if (num % 3 === 0 ) {
        return "Fizz";
    } else {
        return num;
    }

}

for (let i = 0; i <= 100; i++) {
    console.log(i, divisivel(i));
}