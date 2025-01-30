const frm = document.querySelector("form"); //obtém elementos da página
const resp = document.querySelector("h3");

//cria ouvinte do evento
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita envio do form
    const numero = Number(frm.inNumero.value) //obtém número digitado no form
    const raiz = Math.sqrt(numero) //calcura raiz quadrada do número
    if (Number.isInteger(raiz)) {  //se o valor da raiz for um número inteiro
        resp.innerText = `Raiz: ${raiz}` //...mostra a raiz
    } else {
        resp.innerText = `Não há raiz exata para ${numero}` //...mostra mensagem
    }
})