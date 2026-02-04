const imageEl = document.getElementById("img");
const textEl  = document.getElementById("text");
const footerEl = document.getElementById("footer")

const pensadores = [
    {
        nome: "Nikola Tesla",
        texto: "Deixem que o futuro diga a verdade e avalie cada um de acordo com o seu trabalho e realizações.O presente pertence a eles, mas o futuro pelo qual eu sempre trabalhei pertence a mim",
        foto: "https://cdn.universoracionalista.org/wp-content/uploads/2020/10/nikola-colorize-e1604146363786.jpg"
    },
    {
    nome: "Albert Einstein",
        texto: "Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta.",
        foto: "https://citacoes.in/media/authors/albert-einstein.jpg"
    },
    {
        nome: "Sócrates",
        texto: "Eu não posso ensinar nada a ninguém, eu só posso fazê-lo pensar.",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0azcPPZejOl56oOTrN_qV9OtcpzkMP1c0pw&s"

    }
];

let indiceAtual = 0;

const atualizarCitacao = () => {
    const p = pensadores[indiceAtual];

    imageEl.src = p.foto;
    textEl.innerText = p.texto;
    footerEl.innerText = p.nome;

    indiceAtual = (indiceAtual + 1) % pensadores.length;
};

setInterval(atualizarCitacao, 10000);


