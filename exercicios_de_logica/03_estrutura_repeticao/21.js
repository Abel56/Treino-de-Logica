/* 21) Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.*/

var numero = 13
var div = 0
var contador = 1


if (numero == 2) {
    console.log("è Primo")
} else if (numero % 2 == 0) {
    console.log("Não é primo")
} else {
    while (numero >= contador) {
        if (numero % contador == 0) {
            div += 1
        }
        contador += 1
    }
    if (div > 2) {
        console.log("Não é primo")
    } else {
        console.log("É Primo")
    }

}


