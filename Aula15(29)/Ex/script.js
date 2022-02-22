/*
<script>
        const num = prompt("Digite o seu nome:");
        document.body.innerHTML += `<h1> Seu número é ${num}.</h1>`;
        document.body.innerHTML += `A Raiz quadrada do seu ${num} é ${num ** 0.5}</strong><br />`;
        document.body.innerHTML += `${num}</strong> é inteiro: ${Number.isInteger(num)}.<br />`;
        document.body.innerHTML += `É Nan: ${isNaN(num)}</strong>. <br />`;
        document.body.innerHTML += `Arrendondamento para BAIXO: <strong>${Math.floor(num)}</strong><br />`;
        document.body.innerHTML += `Arrendondamento para CIMA: <strong>${Math.ceil(num)}</strong><br />`;
        document.body.innerHTML += `Com duas Casas decimais: <strong>${(num.toFixed(2))}</strong>.<br />`;
    </script>
*/

const num = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('Numero-título');
const texto = document.getElementById('Texto');

numeroTitulo.innerHTML = num;
texto.innerHTML = '';
texto.innerHTML += `<p>A Raiz quadrada: ${num ** 0.5}</strong></p>`;
texto.innerHTML += `<p>${num}</strong> é inteiro: ${Number.isInteger(num)}.</p>`;
texto.innerHTML += `<p>É Nan: ${isNaN(num)}</strong>.</p>`;
texto.innerHTML += `<p>Arrendondamento para BAIXO: <strong>${Math.floor(num)}</strong></p>`;
texto.innerHTML += `<p>Arrendondamento para CIMA: <strong>${Math.ceil(num)}</strong></p>`;
texto.innerHTML += `<p>Com duas Casas decimais: <strong>${(num.toFixed(2))}</strong>.</p>`;
