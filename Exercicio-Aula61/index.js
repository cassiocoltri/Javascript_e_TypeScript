/* Escreva uma função ePaisagem que recebe dois argumentos, largura e altura de uma imágem (number).
Retorna TRUE se a imagem estiver no modo paiságem. */


// Arrow:          (argumentos...)  func (condição...)  IF(?) resultado ELSE (:) resultado
const ePaisagem = (largura, altura) => largura > altura ? true : false; // Como esta retornado TRUE ou FALSe. não precisaria do ? ou :

console.log(ePaisagem(1.8, 1.5));
console.log(ePaisagem(1.1, 1.5));
console.log(ePaisagem("miau", 1.5));
console.log(ePaisagem(1.8, "1.6"));