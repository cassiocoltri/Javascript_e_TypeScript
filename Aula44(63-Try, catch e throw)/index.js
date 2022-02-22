/*
// O TRY (tenta) uma ação, caso ela não funcione, ela cai no "CATCH" que pega o erro e joga uma solução/comando. Parece IF e ELSE
try { // Tentando exacutar a função ou variável "naoExisto"...
    console.log(naoExisto); // não existe e gerou um "erro" (aquele que aparece no OUPUT)
} catch (erro) { // Aqui pegando o erro e jogando alguma solução possível, no caso o comando abaixo que quero....
    console.log("naoExisto não exite.")
}
*/


function soma(x,y) {
    if (typeof x !== 'number' || typeof y !==  'number') { // aqui ele vai testar algua condição...
        throw new Error ("X e Y precisam ser números.") // aqui esta "jogando(THROW) o erro na tela do usuário"
    }
    return x + y;
}

try {
    console.log(soma(1,2));
    console.log(soma("1", 4));
} catch(error) {
    //console.log(error); // Aqui para saber onde deu o ERRO exato, pois ele esta mostrando o que o "catch" pegou.
    console.log("Alguma coisa deu errado...") // ALERTA mais amigável de erro...
}