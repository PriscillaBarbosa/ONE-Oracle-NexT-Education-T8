alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual a 5
while (chute != numeroSecreto) {

    chute = prompt('Escolha um número entre 1 e 30');

    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o ${numeroSecreto} com ${tentativas} tentativa(s)`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}. `);
        }
        //tentativas = tentativas + 1
        tentativas ++;
    }
} 