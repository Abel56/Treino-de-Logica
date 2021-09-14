/* 24)Faça um programa que calcule e mostre a média aritmética de N notas. */

var contador = 1, soma = 0, media = 0

while (contador == contador) {
    var nota = parseFloat(window.prompt(`Digite a ${contador}° nota: `));
    soma += nota
    console.log(nota)
    var opcao = window.prompt("1 - continuar\n2 - encerrar")
    if (opcao == 2) {
        console.log("Programa encerrado!")
        break;
    } else if (opcao != 1) {
        console.log("Programa encerrado!")
        break;
    }

    contador += 1
}

media = soma / contador
console.log("media " + media.toFixed(2))




