/*18)Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.*/



var contador = 1, contador2 = 1 
var numero = 0, menor = 0, maior = 0, resultado = 0
while (contador == contador) {
    numero = +window.prompt("Digite um número:"); 5 / 4 / 2
    end = window.prompt("Inserir mais números? Yes or No Y/N")

    if (contador2 == 1) {
        menor = numero
    }
    if (numero < menor) {
        menor = numero
    }

    if (numero > maior) { // 5
        maior = numero
    }

    if (end == "N") {
        break;
    } else if (end != "Y") {
        break;
    }
    console.log(numero, menor, maior)
    contador2 += 1
}
resultado = maior + menor

console.log(resultado)