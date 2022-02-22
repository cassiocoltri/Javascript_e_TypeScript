const paragrafos = document.querySelector('.paragrafos'); // Aqui esta pegando as info do "paragrafo" na CLASS do HTML
const ps = paragrafos.querySelectorAll('p'); // aqui esta pegando tudo que esta dentro do <p> no HTML atráves do paragrafo que pegou da CLASS paragrafo no HTML

const estiloBody = getComputedStyle(document.body); // aqui esta pegando o estilo da pagina
const backgroundColorbBody = estiloBody.backgroundColor; // essa aqui esta pegando a COR do fundo da pagina
console.log(backgroundColorbBody)

for (let p of ps) {
    p.style.backgroundColor = backgroundColorbBody; // Aqui estou mudando o FUNDO da frase, posso informar uma cor literal tb ('red')
    p.style.color = 'white'; // ou '#FFFFFF' que é BRANCO tb. Aqui trocando a COR da escrita.
}