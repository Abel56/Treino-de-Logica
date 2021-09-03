/*
    46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 + 
    8 + 10 + 12 + 14 + ... + 98 + 100
*/

var contador = 6
var soma = 0
while (contador <= 100) {
    console.log(contador)
    soma += contador

    contador += 2
}

console.log(soma)











