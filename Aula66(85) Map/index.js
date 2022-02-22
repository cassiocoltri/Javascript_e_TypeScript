//O [MAP] retorna um array com os valores alterados. SEMPRE retorna o tamanho original, editado ou não.
//Já que ele "(map)eia" o array e vai retornar com algum valor.

//O [Filter] (Filtra) retorna igual ou menor, sem alterações (apenas Boleano) Ou é, ou não é...

//Ex: 01 - Dobre os numeros.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobrarNumero = numeros.map(valor => valor * 2);
console.log(dobrarNumero);

//Para cada Elemento:
//Retorne apenas uma String com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave "id" em cada objeto.

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const stringNome = pessoas.map(obj => obj.nome);
console.log(stringNome);

const removaChaveNome = pessoas.map(function(obj) {
    return { idade: obj.idade}; // Aqui estou retornando um novo {obj} com apenas a informação obj.idade
});
console.log(removaChaveNome);

const chaveId = pessoas.map(function(obj, indice) {
    //OBS: Foi nescessário criar um novo Obj recebeno o original pq do contrario o MAP estaria alterando as info do original.
    const newObj = {...obj}; // Aqui estou criando um NOVO Objeto com as informações do obj original;
    newObj.ID = indice + 1; // Aqui estou colocando o "valor" ou argumento inicial + "." alguma coisa que quero, nesse caso criar ID
    return newObj;
});
console.log(chaveId);