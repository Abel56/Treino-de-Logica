/*
  66) Escreva um programa que leia um número qualquer e mostre a tabuada desse 
    número, usando a estrutura “para”.
    Ex: Digite um valor: 5
    5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15 ...
*/

var numero = 7/* +window.prompt("Digite um número:"); */

for (i = 1; i <= 10; i++) {
  console.log(numero + ' X ' + i + " = " + numero * i)
}