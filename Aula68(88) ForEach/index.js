// forEach está APENAS disponível em ARRAYS!

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// Método FOR OF
for(let valor of a1) {
    console.log(valor);
}

//Método forEach:

let total = 0;
a1.forEach(function(valor){ // forEach recebe os 3 argumentos, VALOR, INDICE e ARRAY.
    total += valor;
})
console.log(total);