const inputTafera = document.querySelector('.input-tafera'); // Cada variável esta "pegando" uma parte do HTML, da 'class'
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTafera.addEventListener('keypress', function(e){ // Aqui a função vai receber alguma tecla pressionada (keypress)
    //que será quardar no "(e)", depois o codigo abaixo vai ver se a tecla pressionada "e.keyCode"
    if (e.keyCode === 13) { // Aqui esta vereficando o "tipo de tecla" pressionada é igual ao ENTER que é o cod:13
        if (!inputTafera.value) return; // Aqui vai identificar de foi pressionada o enter, se foi, sera adicionado no inputTarefa
        criaTarefa(inputTafera.value);
    }
})

function limpaImput() { // Nessa função ela esta LIMPANDO o campo de "inputTarefa"
    inputTafera.value = ''; // Aqui fazendo o valor (value) do input voltar a "nada ou vazio"
    inputTafera.focus(); // aqui apenas para deixar o cursos "piscando", comando nativo do HTML.
}

function criarBotaoApagar(li) { // Função para Criar um botao
    li.innerText += ' '; // comando para deixar um "espaço" entre os comandos.
    const botaoApagar = document.createElement('button'); // Aqui funão está recebendo um comando para criar um "Botão"
    botaoApagar.innerText = 'Apagar'; // criando no corpo do HTML a escrita "Apagar" do botão.
    botaoApagar.setAttribute('class', 'apagar'); // estou dando uma CLASS com nome 'apagar' para o botão
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // Mesma coisa, "atribuindo" um TITLE...
    li.appendChild(botaoApagar); // Aqui esta "anexando" a variável criada no corpo da HTML
}

function criaTarefa(textInput) {
    const li = criaLi(); // essa variável esta recebendo a FUNÇÃO 'criaLi', não sendo re-declarada
    li.innerText = textInput;
    tarefas.appendChild(li);
    limpaImput(); // Limpando o input depois de receber o ENTER.
    criarBotaoApagar(li);
    salvarTarefas();
    
}

btnTarefa.addEventListener('click', function() {
    if (!inputTafera.value) return; // Como tem apenas UMA linha de comando, não precisa do {} no if. Aqui esta com "!" e NÃO
    criaTarefa(inputTafera.value);
    console.log(inputTafera.value);
});

document.addEventListener('click', function(e){ // Criado esse evento para receber o "click"
    const el = e.target; // Essa variável esta recebendo o que esta sendo "clicado"

    if (el.classList.contains('apagar')) { // Se o CLICK for igual a algum elemento com a class 'apagar' ele faz...(condição)
        el.parentElement.remove(); // Aqui ele identificou que é a classe 'apagar' e "removeu o pai(parent)" do comando que veio.
        salvarTarefas();
    }
});


// Função para SALVAR o que foi digitado.
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // Essa "querySelectorAll" esta selecioando todos os "LI" existentes
    const listaDeTarefas = []; // Esse ARRAY vai receber todos os LI localizados e guardar dentro da função.

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // esse cod esta retirando o "Apagar" escrito por NADA '(espaco em bco)'
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefaJSON = JSON.stringify(listaDeTarefas); // Criando o arquivo JSON em string com as informações.
    localStorage.setItem('tarefas', tarefaJSON); // Salvando o arquivo com o nome de "tarefas". Ele só salva STRINGS, por isso o JSON
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // Aqui converte o JSON para novamente um objeto JavaScript

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();