/*
27)Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais de 40 alunos.
*/

var turma = +window.prompt("Número de turmas: ");
var numeroAlunos = 0, mediaAlunos = 0;
var somaAlunos = 0;
for (var i = 1; turma >= i; i++) {
    numeroAlunos = +window.prompt(`Número de alunos na ${i}ª turma.`);
    if (numeroAlunos > 40) {
        while (numeroAlunos > 40) {
            window.alert("O máximo de alunos por turma é 40");
            numeroAlunos = +window.prompt(`Número de alunos na ${i}ª turma.`);
        }
    }
    somaAlunos += numeroAlunos
    console.log(`${i}ª turma possui ${numeroAlunos}`)
}

mediaAlunos = somaAlunos / turma

console.log(`Média de Alunos ${mediaAlunos}`)