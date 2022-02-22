function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function receberEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');//Aqui o pegar no CORPO do html o .nome (dentro do <form>)
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({ // Aqui foi criado um objeto {} para receber as informações do formulario
            nome: nome.value, // Atentar ao value, é em Minusculo, ele tem Value tb. Não funciona.
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} `+
        `${peso.value} ${altura.value}.</p>`

    };

    form.addEventListener('submit', receberEventoForm);

};

meuEscopo();