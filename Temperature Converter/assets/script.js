// Definiçoes dos inputs
const cEl = document.getElementById('celsius')
const fEl = document.getElementById('farhe');
const kEl = document.getElementById('kelvin');

 // Função que calcular as temperatuas.
function computeTemp(event)  { //                                                                                     event    target        value
    const currentTemp = +event.target.value;//currentTemp/atualTemperatura, pega o número colocado no input,usando um evento,selecionado e o valor.

    switch (event.target.name) { // switch/comunicador  comunica, o evento, selecionado, pelo nome.
        case "celsius": // Caso o nome for "celsius".
            kEl.value = (currentTemp + 273.32).toFixed(2); // Converte de celsius para kelvin.
            fEl.value = (currentTemp * 1.8 + 32).toFixed(2); // Converte de celsius para farhenheit.
            break; // Quebra a ação,para não se tornar um loop infinito.

        case "farhe": // Caso o nome for "farhe".
            cEl.value = ((currentTemp - 32) / 1.8).toFixed(2); // Converte de farhenheit para celsius.
            kEl.value = ((currentTemp - 32) / 1.8 + 273.32).toFixed(2);// Converte de farhenheit para kelvin.
            break; // Quebra a ação,para não se tornar um loop infinito.

        case "kelvin": // Caso o nome for "kelvin".z
            cEl.value = (currentTemp - 273.32).toFixed(2); // Converte de kelvin para celsius.
            fEl.value = ((currentTemp - 273.32) * 1.8 + 32).toFixed(2); // Converte de kelvin para farhenheit.
            break; // Quebra a ação,para não se tornar um loop infinito.
            default: // Padrão = quebrar.
            break;
    }
}

