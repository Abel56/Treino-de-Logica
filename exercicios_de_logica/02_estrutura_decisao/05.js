/* 5) Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.*/

var nota1 = 10
var nota2 = 10
var media = (nota1 + nota2) / 2
if (media >= 7 && media < 10) {
  console.log("Aprovado!")
} else if (media < 7) {
  console.log("Reprovado!")
} else {
  console.log("Aprovado com Distinção!")
}

