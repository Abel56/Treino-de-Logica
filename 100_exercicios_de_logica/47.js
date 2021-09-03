/*
    47) Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 + 
    450 + 400 + 350 + 300 + ... + 50 + 0
*/

var contador = 500
var soma = null

while (contador > 0) {
    console.log(contador)
    soma += contador

    contador -= 1
}
console.log(soma)







