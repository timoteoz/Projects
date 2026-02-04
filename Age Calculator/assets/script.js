
//Definições de botões
const btnDateEl = document.getElementById('btn-date');
const btnEl =  document.getElementById('btn');
const displayEl = document.getElementById('display');


//Função que calculada a idade,pegando a data selecionada e a subtraindo pela data atual;
const calculaIdade = () => {
    const dateAniver = btnDateEl.value; //dateAniver pega a data selecionada
    if(dateAniver === '') {
        alert('Digite uma data')//Aqui diz,se a barra de pesquisa estiver vazia,vai mostar um alerta "Digite uma data"
    } else {
        //Se não,retorne e adicione, idade como um texto no displayEL
        const idade = getIdade(dateAniver);
        displayEl.innerText = `Sua idade é ${idade} ${idade > 1 ? "anos" : "anos"} `;
    }

}

const getIdade = (dateAniver) => {
    const DataAtual = new Date(); //Aqui utiliza new Date(),para pegar a data atual       //                       ano mes dia
    const diaAniversario = new Date(dateAniver);//Aqui pega a data selecionada e a tranforma em formatos de data = 0000-00-0
    let idade = DataAtual.getFullYear() - diaAniversario.getFullYear();//Essa variavel é, a data atual menos a data selecionada
    const mes = DataAtual.getMonth() - diaAniversario.getMonth();//Essa variavel é, o mes atual menos o mes selecionado

    //Aqui diz,se o mes for menor que 0 ou igual a 0 e DataAnual for menor que DiaAniversario,diminuir idade

    if( mes < 0 || (mes === 0 && DataAtual.getDate() < diaAniversario.getDate())) {
        idade--; //diminui idade
    }
    
    return idade;//Retorna idade
}

btnEl.addEventListener('click' , calculaIdade);//Adiciona um evento,que quando o botão for clicado/"click",retorna a função calculaIdade







