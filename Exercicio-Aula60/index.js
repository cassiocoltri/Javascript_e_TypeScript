function retornaDois (num, num2) {
    if (num > num2) {
        return console.log(num);
    } else {
        return console.log(num2); // Como só tem UMA opção, não precisaria do ELSE, só com o IF funcionaria!!!
    }
}

// ou:

function maior (num, num2) {
    return num > num2 ? num : num2; // aqui esta a MESMA coisa, mas simplificado.
}

// Ou com métido Arrow:

const maior2 = (num, num2) => num > num2 ? num : num2;

retornaDois(10,20)
retornaDois(20, 5)
console.log(maior2(9999,89));