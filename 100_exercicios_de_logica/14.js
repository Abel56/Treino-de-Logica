/*
14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva 
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a 
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, 
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado
 
*/

var kmPercorrido = 120
var diasAlugado = 7

var valorDiaria = diasAlugado * 90
var valorKm = kmPercorrido * 0.2

console.log(`Recibo:\nDiária: R$${valorDiaria}\nKm rodado: R$${valorKm}\nTotal: R$${valorDiaria + valorKm}`)