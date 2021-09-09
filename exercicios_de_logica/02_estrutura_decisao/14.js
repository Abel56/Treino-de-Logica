/* Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A    atribuição de conceitos obedece à tabela abaixo:
  Média de Aproveitamento  Conceito
  Entre 9.0 e 10.0        A
  Entre 7.5 e 9.0         B
  Entre 6.0 e 7.5         C
  Entre 4.0 e 6.0         D
  Entre 4.0 e zero        E
  */

var nota1 = 0;
var nota2 = 0;
var media = (nota1 + nota2) / 2;
console.log("media :" + media)

if (nota1 > 10 || nota2 > 10) {
    console.log("Digite uma nota de 1 a 10")
} else if (media > 9 && media <= 10) {
    console.log("Conceito : A")
} else if (media > 7.5 && media <= 9) {
    console.log("Conceito : B")
} else if (media > 6 && media <= 7.5) {
    console.log("Conceito : C")
} else if (media > 4 && media <= 6) {
    console.log("Conceito : D")
} else if (media <= 4 && media > 0) {
    console.log("Conceito : E")
} else {
    console.log("Conceito : F")
}


