/* 1)Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.
 */

var nota = window.prompt("Digite uma nota:")

if (nota < 0 || nota > 10) {
    console.log("Valor inválido")
    while(nota < 0 || nota > 10){

        var nota = window.prompt("Digite uma nota válida!")
    }
}
console.log(nota)