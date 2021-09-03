/*
    Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o 
    seu novo salário, com 15% de aumento.
 
*/

var salarioAtual = 1280.00
var salarioNovo = salarioAtual + (15 / 100 * salarioAtual)
var salarioPorcentagem = (salarioNovo - salarioAtual) / salarioAtual* 100
console.log(salarioNovo)
console.log(salarioPorcentagem)
