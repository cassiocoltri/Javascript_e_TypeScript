// IIFE -> Immediately Invoked Function Expression (Invocando uma Expressao de Função Imediatamente).
//Usado para executar algo instantaneamente, útil para proteger o código do escopo global e evitar ser alterado ou mexido.

(function() { // Criando a função dentro de () ela fica "protegida" quando invocada automaticamente.
    const nome = "Luiz"; // Aqui esta 100% protegido o valor.
    console.log(nome);
    const teste = 0;
    const juquinha = 5;
    const blabla = teste + juquinha
    console.log(blabla);
    const xarope = function xablacu() {
        return xarope;
    }
    // Todo o CODIGO esta protegido dentro do IIFE, então nada de "fora" pode tocar ou alterar.
})(); // Para invocar em seguida de usa o (); Tudo acima esta protegido.

const nome = "Qualquer coisa..." /* Mesmo essa variável tendo o mesmo nome que a dentro do IIFE ela não atrapalha pq 
não chega a "tocar" o escopo do programa, ou a "janela" (windown).
*/

console.log(nome); // Pedi para executar, mas vai rodar o "Qualquer coisa" pq a outra variável nome esta protegida.