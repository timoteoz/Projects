//Define "section-grade" como valor da variavel "containerEL"
const containerEl = document.querySelector(".section-grade")

//Um loop,que diz,se o "index" for menos que 30,adicionar.
// index++ = adicionar
for (let index = 0; index < 30; index++) {

    //Cria uma div,no document.Valor direcionado a variavel "colorContainerEL"
    const colorContainerEl = document.createElement("div"); 

    //No literal,"se colorContainerEL,conter uma classe listada/nomeada como "cores".
    colorContainerEl.classList.add("cores");

    //Adicionar um elemento filhos,dentro do elemento pai.
    //   pai                       flho
    containerEl.appendChild(colorContainerEl);
}

//Define "cores" como valor da variavel "colorContainerELs"
const colorContainerEls = document.querySelectorAll(".cores");

generateColors();

//Funçaõ que IMPLEMENTA cores
function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {

        //Define "randomColor" como valor da variavel "newColorCode"
        const newColorCode = randomColor();
        
        // Adicionar # e uma nova cor no colorContainerEl.
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
}

//Função que GERA as cores RANDOMICAMENTE.
function randomColor() {
    //Caracteres.
    const chars = "0123456789abcdef";

    //Define o tamanho do código da cor,no caso 6 caracteres.
    const colorCodeLength = 6;

    //Variavel só para adicionar as variaveis anteriores,"chars" e "colorCodeLength"
    let colorCode = "";

    //Loop com a função de criar números aleatorios,usando justamente, um loop,Math.floor e Math.random().
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    //Retorna/Chama a variavel "ColorCode"
    return colorCode;
}