alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');

if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}