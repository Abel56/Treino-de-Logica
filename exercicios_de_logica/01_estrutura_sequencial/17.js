/* 17) 
   Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
        Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
        comprar apenas latas de 18 litros;
        comprar apenas galões de 3,6 litros;
        misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.
*/


var area = 130//parseFloat(window.prompt("Digite a área a ser pintada:"));
var litros = (area / 3).toFixed(2)
var latas = litros / 18 
var restoLitros = ((18 * ((latas % 2) * 100)) / 100).toFixed(2)
var galoes = restoLitros / 3.6
latas = Math.floor(latas)

var valorPagar = (latas * 80) + (galoes * 25)

console.log(`Litros necessários : ${litros}L\nLatas de 18L: ${latas}\nGalões de 3.6L: ${parseInt(galoes)}\nTotal à pagar R$:${valorPagar.toFixed(2)}`)
