/* 7)Faça um Programa que leia três números e mostre o maior e o menor deles.*/


var numero1 = 7, numero2 = 1, numero3 = 0;
var maior = 0
var menor = 0

if (numero1 > numero2 && numero1 > numero3) {
  maior = numero1
  if (numero2 < numero3) {
    menor = numero2
  } else {
    menor = numero3
  }
} else if (numero2 > numero1 && numero2 > numero3) {
  maior = numero2
  if (numero1 < numero3) {
    menor = numero1
  } else {
    menor = numero3
  }
} else {
  maior = numero3
  if (numero1 < numero2) {
    menor = numero1
  } else {
    menor = numero2
  }
}

console.log(maior, menor)
