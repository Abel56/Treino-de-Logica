/* 6)Faça um Programa que leia três números e mostre o maior deles.*/

var numero1 = 8, numero2 = 13, numero3 = 9;
var maior = 0

if (numero1 > numero2 && numero1 > numero3) {
  maior = numero1
} else if (numero2 > numero1 && numero2 > numero3) {
  maior = numero2
} else {
  maior = numero3
}

console.log(maior)