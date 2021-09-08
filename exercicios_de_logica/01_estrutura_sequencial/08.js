/* 08) Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês. */

var valorHora = 10//parseFloat(window.prompt("Digite o valor que recebe por hora:"));
var horaTrabalhada = 150//parseFloat(window.prompt("Horas trabalhadas:"));

var valorSalario = valorHora * horaTrabalhada

console.log(`Valor a receber R$${valorSalario.toFixed(2)}`)