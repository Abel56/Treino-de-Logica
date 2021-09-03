/*
    10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e 
    mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, 
    sabendo que cada litro de tinta pinta uma área de 2metros quadrados 
*/

var altura = 3.5
var largura = 8

var area = altura * largura
var tinta = area / 2

console.log(`A área a ser pintada é ${area}m²\nE será necessário ${tinta} litros de tinta.`)
