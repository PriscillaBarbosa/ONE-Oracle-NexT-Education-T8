/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; */

//escrevendo a mesma função com poucas linhas

let numeroSecreto = gerarNumeroAleatorio();

//função sem retorno
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

//função sem parâmetro 
function verificarChute() {
    console.log(numeroSecreto);
}

//função sem parâmetro e com retorno
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}