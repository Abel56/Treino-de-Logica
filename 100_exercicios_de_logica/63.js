/*
  63) Crie um programa usando a estrutura “faça enquanto” que leia vários números. 
    A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na 
    tela:
    a) O somatório entre todos os valores
    b) Qual foi o menor valor digitado
    c) A média entre todos os valores
    d) Quantos valores são pares
*/

var contador = 1;
var soma = 0, media,par=0
do {
  var numero = +window.prompt(`Digite o ${contador}° número:`);
  if (contador == 1)
    menor = numero
  if (numero < menor)
    menor = numero
  if(numero % 2 == 0)
    par += 1

  console.log(numero)   

  soma += numero
  end = window.prompt(`Deseja continuar? 1 P/SIM - 2 P/NÃO`)
  if(end == 2){
    console.log("Programa encerrado!");
    break;
  }else if(end =! 1){
    console.log("Programa encerrado");
    break;
  }
  contador += 1
} while (contador == contador)


media = soma / contador
console.log(`Soma dos valores: ${soma}\nO menor número digitado é ${menor}\nA média é ${media}\nNúmeros pares ${par}`)

