//Funções "Recursivas" chama de volta ela mesma.

function recursiva (max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

//Existe um LIMITE de execução que ele pode fazer. Bom para evitar "bugs"