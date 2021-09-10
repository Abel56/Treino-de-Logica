/*21)Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/

var valorSaque = 399
var notasCinquenta = 0, notasCinco = 0
var notasCem = parseInt(valorSaque / 100), notasDez = parseInt(valorSaque % 100 / 10), notasUm = parseInt(valorSaque % 10)
if (notasDez >= 5) {
    notasCinquenta = parseInt(notasDez / 5)
    notasDez -= 5
}
if (notasUm >= 5) {
    notasCinco = parseInt(notasUm / 5)
    notasUm -= 5
}


console.log(`Valor sacado: R$${valorSaque}\n${notasCem} notas de R$100\n${notasCinquenta} nota R$50,00\n${notasDez} notas de R$10,00\n${notasCinco} nota de R$5,00\n${notasUm} notas de R$1,00`)



/* var valor = 398
var final = valor
var cedula = 100
var cedulastotal = 0

while (true)
    if (final >= cedula) {
        final -= cedula
        cedulastotal += 1
    } else {
        if (cedulastotal > 0)
            console.log(`total de ${cedulastotal} cedulas de R${cedula}`)
        if (cedula == 100)
            cedula = 50
        else if (cedula == 50)
            cedula = 10
        else if (cedula == 10)
            cedula = 5
        else if (cedula == 5)
            cedula = 1
        cedulastotal = 0
        if (final == 0)
            break
    }
 */
