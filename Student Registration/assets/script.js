const nomeEl = document.getElementById('nome');
const idadeEl = document.getElementById('idade');
const notaEl = document.getElementById('nota')
const entrarEl = document.getElementById('btn-entrar')
const resultadoEl = document.getElementById('resultado');

function Pessoa(nome,idade) {
    this.nome = nome;
    this.idade = idade;
}

const alunos = [
 new Pessoa("Miguel" , 17),
new Pessoa("Bruna" , 18),
 new Pessoa("lua" , 5)

]


const validaLogin = () => {
    const nome = nomeEl.value.trim();
    const idade = Number(idadeEl.value);
    const notaInput = Number(notaEl.value);

   if (!nome) {
    resultadoEl.textContent = 'Por favor, informe o nome.';
    return;
   }
   if (!idadeEl.value || Number.isNaN(idade) || idade < 0) {
    resultadoEl.textContent = "Por favor, informe uma nota válida entre 0 e 10.";
    return;
   }
   if(notaEl.value === '' || Number.isNaN(notaInput) || notaInput < 0 || notaInput > 10) {
    resultadoEl.textContent = "Por favor, informe uma nota válida entre 0 e 10";
    return;
   }

   const aluno = alunos.find(a => a.nome.toLowerCase() === nome.toLowerCase() && a.idade === idade);

   if (!aluno) {
    resultadoEl.textContent = "Aluno não encontrado com esse nome e idade";
    return;
   }

   const passou = notaInput >= 7;
   resultadoEl.textContent = `${aluno.nome} (idade ${aluno.idade}) - ${passou ? 'Aprovado' : 'Reprovado'}`
    
};

entrarEl.addEventListener('click' , validaLogin);