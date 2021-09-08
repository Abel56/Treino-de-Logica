/* 16) 
    Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.
*/

var area = 130//parseFloat(window.prompt("Digite a área a ser pintada:"));
var litros = (area / 3).toFixed(2)
var latas = Math.ceil(litros / 18)


var valor = latas * 80

console.log("Valor à pagar R$: " + valor)
