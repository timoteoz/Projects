const timerEl = document.getElementById("timer");
const botaoEl = document.getElementById("botao");

const contagem = () => {
   let tempo = Number(timerEl.value);

   const intervalo = setInterval(function() {
      if (tempo <= 0) {
        clearInterval(intervalo);
        return;
      }

      tempo = tempo - 1;
      timerEl.value = tempo;
   }, 1000)
}

botaoEl.addEventListener("click" , contagem);