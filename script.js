 // ex 2

console.log("painel de estudos");
console.log("minhas tarefas");
console.log("script java");

console.log(10 + 5);

// ex 3

const nomeAluno = "Vinícius";
const curso = "Desenvolvimento Web";
let quantidadeTarefas = 3;

console.log(nomeAluno);
console.log(curso);
console.log(quantidadeTarefas);

quantidadeTarefas = 5;

console.log(quantidadeTarefas);

// ex 4

var exemploAntigo = "usada em codigos antigos";

console.log(exemploAntigo);

// tipos de dados
const titulo = "Painel de Estudos";
const quantidadeMaterias = 4;
const painelAtivo = true;
const observacao = null;

console.log(titulo);
console.log(quantidadeMaterias);
console.log(painelAtivo);
console.log(observacao);

// soma subtracao etc
const nota1 = 7;
const nota2 = 8;

const soma = nota1 + nota2;
const diferenca = nota2 - nota1;
const multiplicacao = nota1 * 2;
const media = soma / 2;

console.log(soma);
console.log(diferenca);
console.log(multiplicacao);
console.log(media);
console.log(media >= 6);

// template literals
const mensagem = `O aluno ${nomeAluno} esta no curso de ${curso} e possui ${quantidadeTarefas} tarefas.`;
console.log(mensagem);

//  if e else
if (media >= 6) {
    console.log("Aluno aprovado.");
} else {
    console.log("Aluno precisa estudar mais...");
}

// Desafio integrador
const totalTarefas = 5;
let tarefasConcluidas = 3;

const tarefasPendentes = totalTarefas - tarefasConcluidas;
const percentualConcluido = tarefasConcluidas / totalTarefas * 100;

console.log("tarefas pendentes:", tarefasPendentes);
console.log("Percentual concluído:", percentualConcluido + "%");

const resumo = `Vc concluiu ${tarefasConcluidas} de ${totalTarefas} tarefas e ainda tem ${tarefasPendentes} pendentes.`;
console.log(resumo);

if (tarefasPendentes === 0) {
    console.log("Todas as tarefas foram feitas.");
} else {
    console.log("Ainda existem tarefas pendentes.");
}