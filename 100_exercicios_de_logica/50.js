/*
    50) Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e 
        mostre na tela:
        a) Quais foram os números sorteados
        b) Quantos números estão acima de 5
        c) Quantos números são divisíveis por 3
*/

var contador = 1
var acima5 = 0
var div3 = 0
while (contador <= 20) {

    var random_number = parseInt(Math.random() * 11)
    console.log(random_number)
    contador += 1

    if (random_number > 5) {
        acima5 += 1
    }
    if (random_number % 3 == 0) {
        div3 += 1
    }
}

console.log('\n' + acima5, div3)





