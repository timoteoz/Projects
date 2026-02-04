const inputEl = document.getElementById("input");
const taskEl = document.getElementById("task");
const btnAddEl = document.getElementById("btn-add");

// localStorage.getItem() salva o texto
// JSON.parse () converte a string JSON de volta para um array JavaScript.Sem ele não se seria possivel o uso de forEach,cujo o proprio só funciona em arrays
const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];

const renderTarefas = () => {
    taskEl.innerHTML = "";
    
    //forEach é um método de arrays,que executa uma função uma vez para cada item do array.Nesse caso,para cada tarefa ele criara uma lista "li" e um botão para delete.
    tarefasSalvas.forEach((tarefa, index) => {
        const li = document.createElement("li");

        li.innerHTML = `${tarefa}<button onclick="deletarTarefa(${index})">Delete</button>`;
     
        taskEl.appendChild(li);
    });
};

const criaLista = () => {
    const input = inputEl.value.trim();
    if (input === "") return;

    tarefasSalvas.push(input);
    localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));

    inputEl.value = "";
    renderTarefas();
};

const deletarTarefa = (index) => {
    tarefasSalvas.splice(index,1);
    localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
    renderTarefas();
};

btnAddEl.addEventListener("click", criaLista);

renderTarefas();





