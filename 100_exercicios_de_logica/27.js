/*
   27) Crie um programa que leia duas notas de um aluno e calcule a sua média, 
    mostrando uma mensagem no final, de acordo com a média atingida:
        - Média até 4.9: REPROVADO
        - Média entre 5.0 e 6.9: RECUPERAÇÃO
        - Média 7.0 ou superior: APROVADO
*/

var n1 = 2
var n2 = 1
var n3 = 10

var media = (n1 + n2 + n3) / 3

if (media < 5) {
    console.log(`Sua média foi ${media}, que pena!! você está reprovado!`)
} else if (media >= 5 && media < 7) {
    console.log(`Sua média foi ${media}, você ainda tem uma chance, está de recuperação!!`)
} else {
    console.log(`Sua média foi ${media}, Parabéns, você está aprovado!`)
}