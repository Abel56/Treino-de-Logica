/* 23)Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados. */

var contador = 0
var numero = 92

var div = 0
var div2 = 0

while (numero >= contador) {
    if (numero % contador == 0) {
        div += 1
        console.log(`${numero} / ${contador} = ${numero / contador}`)

    }
    if (contador == numero) {

        if (div > 2) {
            console.log("Não é primo!")
        } else {
            console.log("É primo!")
        }
        console.log("============")
        contador = 0
        numero -= 1
        div = 0
    }
    contador += 1

}
