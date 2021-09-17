/* 32)Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120. A saída deve ser conforme o exemplo abaixo:
Fatorial de: 5
5! =  5 . 4 . 3 . 2 . 1 = 120 */

var numero = 5//+window.prompt("Numero: ");
var contador = numero;
var str = ""
var fatorial = 1
while (contador >= 1) {
    str += contador + " . "
    console.log(contador)
    fatorial *= contador
    contador--
}

console.log(numero + "! = " + str + "= " + fatorial)