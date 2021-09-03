/*
    19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua 
    média e mostre na tela. No final, analise a média e mostre se o aluno teve ou 
    não um bom aproveitamento (se ficou acima da média 7.0)
*/

var nome = 'Abel'
var n1 = 7
var n2 = 6
var media = (n1 + n2) / 2

if (media > 7) {
    console.log(nome + " Obteve um bom aproveitamento")
} else {
    console.log(nome + ' Ficou a desejar')
}
