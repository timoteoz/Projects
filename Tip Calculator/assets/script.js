
//Definições de elementos
const billEl = document.getElementById('bill');
const percentEl = document.getElementById('percent');
const btncalculateEl = document.getElementById('btn-calculate');
const totalEl = document.getElementById('total');


//Função que calcula as gorjetas
const gorjeta = () => {
    const bill = Number(billEl.value); // Pega o valor de bill,e converte o valor para número usando Number.
    const percent = Number(percentEl.value); // Pega o valor de percent,e converte para número usando Number.
    

    //Aqui diz,se bill ou percenter,não for um número,retorne 0
    if(isNaN(bill)  || isNaN(percent)) {
        return 0;
    }

   //Retorna o calculo de gorgeta
    return bill * (percent / 100);
};

//Adicionar um evento de click ao botão,chamando a "gorjeta" atribuida em "valor" e depois adicionando a div usando innerText.
btncalculateEl.addEventListener('click' , () => {
   const valor = gorjeta();
   totalEl.innerText = `Sua gorjeta é ${valor.toFixed(2)}`
});

