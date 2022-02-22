// Operador Ternário: "?" E ":"

const pontuacaoUsuario = 1000;

// Aqui ele esta "perguntando" o resultado, o primeiro (?) equivale a if/TRUE, o segundo (:) a else/FALSE.
//Caso for TRUE (if) vai responder "Usuario VIP" e caso for FALSE (else) "Usuário Normal"


//                         (condição)           retorna TRUE     returna FALSE
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal.';

const corUsuario = null; // Se o usuario não setar nenhuma cor, por padrão vai retornar o PRETA, como exemplo abaixo.
const corPadrao = corUsuario || "Preta"; // Aqui é um "Fallback", ele retorna o PADRÂO caso a cor do usuario não foi setado.


console.log(nivelUsuario, corPadrao)

/* Metodo "padrão"
if (pontuacaoUsuario >= 1000) {
    console.log("Usuário VIP");
} else {
    console.log("Usuário Normal");
}
*/