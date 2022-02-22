function criaCalculadora() {
    return {
        //Atributos dessa linha para baixo. Não é regra, penas para organizar melhor.
        display: document.querySelector('.display'), // aqui esta pegando o .display do html

        //Metodos vão ser colocados dessa linha para baixo
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value; // variável vai receber o valor do display
            
            try { // aqui vai "tentar" uma execução
                conta = eval(conta); // função "eval" é do JS, ele nativamente realiza uma conta aritimética normal.

                if (!conta) { // Aqui ele vai avaliar, se a variável for Diferente de alguma conta (Dar um NaN por exemplo)
                    alert("Conta inválida"); // vai retornar um alerta com a menssagem de erro.
                    return; // return para "pular" esse procedimento
                }

                this.display.value = String(conta);
            } catch (e) {
                alert("Conta inválida");
                return;
            }
        },

        clearDisplay() { // Esse função faz apenas o valor do display ser igual a nada.
            this.display.value = '';
        },

        apagaUm() { // Funcao botão apagar um, ele vai receber o valor do display (string) e cortar (slice) o ultimo valor digitado, A partir do "indice 0" deleta um (-1)
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes(){
            document.addEventListener('click', e =>{ // esse comando para pegar os cliques do mouse, padrão e nativo.
                const el = e.target; // Essa função esta guardando o que esta sendo clicado, e.target faz isso nativamente;

                if (el.classList.contains('btn-num')) { // Aqui esta vendo de o que a variavel (el) "pegou" esta constado na classList ('nome') dentro do arquibo HTML
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) { // Se o (el) pegar o o que tem na classList "btn-clear" vai executar abaixo
                    this.clearDisplay(); // executando a função limpar.
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }); // ARROW function bloqueia os this dentro
        },

        btnParaDisplay(valor) { // arg
            this.display.value += valor; // Esse comando esta pegando o "Valor pego pelo Display" e concatenando com o arg da função
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();