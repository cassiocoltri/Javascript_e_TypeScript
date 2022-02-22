// NEW significar que é uma função Construtora, Func construtora tem a primeira letra Maiusc.
/*
const tresHoras = 60 * 60 * 3 * 1000; // Aqui foi acrescentando 3 horas em milesegundos pq hora dif da gringa é 3 (GMT 3)
const umDia = 60 * 60 * 24 * 1000; // formula de um dia em mileseguntos.
const data = new Date(0 + tresHoras + umDia); // Hora 0 é o marco inicial/zero, 01/01/1970, abaixo disso tem que colocar negativo. (época unix) 
*/
//                    ano  mes dia |Hr| Min |Seg| MileSegundos
const data = new Date(2020, 3, 20, 20, 15, 59, 500); // aqui o 3 é ABRIL, pq no JS Janeiro começa no '0'

const data2 = new Date('2019-04-20 20:15:59.100'); // Ele aceita formato String, dá de colocar 2020-04-20T :hora....(T no lugar de espaco)

console.log('Dia', data2.getDate()); // Pegar o DIA
console.log('Mês', data2.getMonth() + 1); // Pega o Mês // Para ABRIL foi somado +1, já que ele esta no 3
console.log('Ano', data2.getFullYear()); // Pega Ano
console.log('Hora', data2.getHours());
console.log('Min', data2.getMinutes());
console.log('Seg', data2.getSeconds());
console.log('Ms', data2.getMilliseconds()); // Ms = Milesegundos
console.log('Dia da Semana', data2.getDay()); // Dia começa no 0-Dom e vai até 6-Sabado (1-Seg, 2-Terça, 3-Quarta...)

console.log(data2.toString()) // Aqui ele vai retornar com a info em ingles.

console.log(Date.now()); // Aqui ele vai pegar a hora atual em MILESEGUNDOS

// ----------------------------------

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data3 = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);