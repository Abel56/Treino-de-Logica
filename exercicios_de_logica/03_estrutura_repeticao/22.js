/* 22)Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por quais número ele é divisível.*/

var contador = 1
var numero = 97

var div = 0
var div2 = 0

while (numero >= contador) {
    if (numero % contador == 0) {
        div += 1
        if (div > 0 && div <= 2) {
            console.log(`${numero} / ${contador} = ${numero / contador}`)
        }
    }

    contador += 1
}

