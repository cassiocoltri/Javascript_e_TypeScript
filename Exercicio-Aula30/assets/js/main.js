
const data = new Date();

function diaNomeSemana(dia) {
switch (dia) {
    case 0:
        dia = "Domingo";
        return dia;
    case 1:
        dia = "Segunda-Feira";
        return dia;
    case 2:
        dia = "Terça-Feira";
        return dia;
    case 3:
        dia = "Quarta-Feira";
        return dia;
    case 4:
        dia = "Quinta-Feira";
        return dia;
    case 5:
        dia = "Sexta-Feira";
        return dia;
    case 6:
        dia = "Sabado";
        return dia;
    }
}

function diaNomeMes(mes) {
switch (mes) {
    case 0:
        mes = "Janeiro ";
        return mes;
    case 1:
        mes = "Fevereiro ";
        return mes;
    case 2:
        mes = "Março ";
        return mes;
    case 3:
        mes = "Abril ";
        return mes;
    case 4:
        mes = "Maio ";
        return mes;
    case 5:
        mes = "Junho ";
        return mes;
    case 6:
        mes = "Julho ";
        return mes;
    case 7:
        mes = "Agosto ";
        return mes;
    case 8:
        mes = "Setembro ";
        return mes;
    case 9:
        mes = "Outubro ";
        return mes;
    case 10:
        mes = "Novembro ";
        return mes;
    case 11:
        mes = "Dezembro ";
        return mes;
}
}

function diaNomeSemana2(dia) { // Outra forma de fazer no lugar dos CASE
    const diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
'Sexta-feira', 'Sábado', 'Domingo']
return diaSemana[dia]
};

function diaNomeMeses2(mes){ // Outra forma de fazer no lugar dos CASE
    const diaMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
return diaMes[mes]
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    
    const nomeDia = diaNomeSemana2(diaSemana);
    const nomeMes = diaNomeMeses2(numeroMes);

    return `${nomeDia},${data.getDay()} de ${nomeMes} de ${data.getFullYear()}. 
    As ${zeroAEsquerda(data.getHours(+3))}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}.`
}

const h1 = document.querySelector('.container h1'); // Aqui a Classe esta em "container" (dentro do HTML) e o h2 onde esta o texto
h1.innerHTML = criaData(data); // Esta jogando a informação dentro da TAG do <h2> dentro do HTML dentro da class "container"


// OU....

const h2 = document.querySelector('.container h2');
const data2 = new Date();
//const opcoes = {
//    dateStyle: 'full',
//    timeStyle: 'short'
//};

h2.innerHTML = data2.toLocaleDateString('pt-BR', { dateStyle: 'full'});