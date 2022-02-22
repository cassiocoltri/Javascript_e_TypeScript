function mostrarHora() { // Quando uma função fica com "()" VAZIA, ela executa sózinho.
    let data = new Date();

    return data.toLocaleTimeString('pt-BR' , {
        hour12: false // Aqui serve para mostrar a hora em 24, e não 12..
    });
}

//function funcDoIntervalo() {
  //  console.log(mostrarHora());
//}

// Setar um intervalo de tempo para exacutar alguma coisa
//setInterval(funcDoIntervalo, 2000); // Primeiro parâmetro é chamar a função ou variavel e segundo é o tempo de execução.

//NÃO PRECISARIA CRIAR UMA FUNÇÃO SÓ PARA ISSO, existe as funções "anônimas".
//Mesma caso acima porem com uma funcão anonima:

/*
setInterval(function (){
    console.log(mostrarHora())
}, 1000) // tempo de execução em Milessegundos
*/

// OU:

const timer = setInterval(() => { // OBS: Aqui estou jogando a FUNÇÃO dentro de uma váriável, da de fazer isso.
    console.log(mostrarHora())
}, 1000);

// Função SETTIMEOUT executa apenas UMA VEZ

setTimeout(() => {
    clearInterval(timer); // Aqui estou fazendo ele "limpar o invervalo" da função ou variavel ou o que quiser...
}, 5000); // aqui equivale a 5 seg

setTimeout(() => {
    console.log("Olar cheirozão!!!")
}, 10000); // Executando em 10 seg