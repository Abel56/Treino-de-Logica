/*
    51) Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela 
        qual foi o maior e qual foi o menor preço digitados
*/


var contador = 1
var maior;
var menor;
while (contador <= 10) {

    var preco = +window.prompt(`Digite o preço do ${contador}º produto R$:`)
    if (contador == 1) {
        maior = preco
        menor = preco
    }

    if (preco > maior) {
        maior = preco
    }
    if (preco < menor) {
        menor = preco
    }

    contador += 1
}

console.log(`O menor valor digitado é R$${menor}\nO maior valor digitado é R$${maior}`)

console.log(preco)

