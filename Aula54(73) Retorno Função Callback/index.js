//Ex 01:

function rand(min = 1000, max = 3000) { // Função para randomico de 1 a 3 seg (em milesegundos)
    const num = Math.random() * (max - min) + min;
    return Math.floor(num); // retornando para variável NUM com numero "arredondado para baixo (floor)"
}

function f1 (callback) {
    setTimeout(() => { // esse comando esta fazendo executar em um tempo específico.
        console.log('f1');
        if (callback) callback();
    }, rand()); // Aqui o tempo setado, nesse caso esta randomico (pela func RAND()) se não tivesse, poderia colocar qualquer tempo
}

function f2 (callback) {
    setTimeout(() => {
        console.log('f2'); 
        if (callback) callback();
    }, rand());
}

function f3 (callback) {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// Executando aqui em "ordem", usando a função "callback" se pode setar as ordens idempentende dos parâmentros de RANDOM feitos antes
f1(f1callback); //Passo #1 - Executando a função F1 e jogando um callback (chamar o amiguinho)

function f1callback() { // Passo #2 - Executando o callback do f1 que esta chamando criando o do f2 para chamar o outro amigo...
    f2(f2callback);
}
function f2callback() { // Passo #3 - Executando o f2 chamando o próximo....
    f3(f3callback);
}
function f3callback() { // Passo #4 - Mesma coisa acima.... Por fim finalizando a ultima aplicação.
    console.log("Olar Mundo!");
}
