/*23) Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.*/

var numero = 752.81
var ehDecimal = false



if (numero % 1 == 0) {
    ehDecimal = false
} else
    ehDecimal = true

console.log(ehDecimal)
