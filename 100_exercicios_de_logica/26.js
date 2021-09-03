/*
    26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando 
    na tela uma das mensagens abaixo:
        - O primeiro valor é o maior
        - O segundo valor é o maior
        - Não existe valor maior, os dois são iguais
*/

var n1 = 5
var n2 = 0

if (n1 > n2) {
    console.log(`${n1} é maior que ${n2}`)
} else if (n2 > n1) {
    console.log(`${n2} é maior que ${n1}`)
} else {
    console.log(`${n1} é igual á ${n2}`)
}