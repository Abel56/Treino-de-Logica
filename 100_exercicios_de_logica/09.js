/*
    9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) 
    e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.
*/

var dinheiro = 100
var dolares = dinheiro / 3.45

console.log(`Você tem R$${dinheiro} convertendo em dolares você irá possuir $${(dinheiro / dolares).toFixed(2)}`)