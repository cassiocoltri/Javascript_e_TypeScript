const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'}, // Pegando aqui pelo innerHTML
    {tag: 'footer', texto: 'Frase 4'}
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]; // essa variavel esta destruturando {} conforme "varre". Cada vez que passa, no caso 4x
    let tagCriada = document.createElement(tag); // comando criar um ELEMENTO (documento) que vai receber as info no html (corpo)
    tagCriada.innerHTML = texto; // Aqui o innerHTML esta recebendo o que tem no TEXTO do objeto criado acima {texto: blablabla}
    div.appendChild(tagCriada); // aqui ele esta recebendo as iformações captadas pela "tagCriada"
}

container.appendChild(div); // aqui no comando appendChild ele esta jogando na pagina HTML, o "container" é onde esta puxando.