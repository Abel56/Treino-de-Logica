/*24) Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação   deve ser acompanhado de uma frase que diga se o número é:
    par ou ímpar;
    positivo ou negativo;
    inteiro ou decimal.*/

var n1 = -10
var n2 = 20
var operador = "*", resultado = 0;
var par = false; positivo = false, inteiro = false;

switch (operador) {
    case "+":
        resultado = n1 + n2
        break;
    case "-":
        resultado = n1 - n2
        break;
    case "*":
        resultado = n1 * n2
        break;
    case "/":
        resultado = n1 / n2
        break;
    default:
        console.log("Operador inválido!")
}
if (resultado % 2 == 0) {
    par = true
    if (resultado < 0) {
        positivo = false
    } else {
        positivo = true
    }
    if (resultado % 1 == 0) {
        inteiro = true
    } else {
        inteiro = false
    }
}


console.log(`É par? ${true}, É > 0? ${positivo}, é inteiro? ${inteiro}`)