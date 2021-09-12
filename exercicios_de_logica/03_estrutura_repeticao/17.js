/*17)Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120*/

var numero = 5//+window.prompt("Número: ");
var fatorial = 1
while (numero >= 1) {
    fatorial = fatorial * numero

    console.log(numero)
    numero -= 1
}
console.log(fatorial)



