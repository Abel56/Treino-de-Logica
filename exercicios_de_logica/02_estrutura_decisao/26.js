/*
26)Um posto está vendendo combustíveis com a seguinte tabela de descontos:
Álcool:
até 20 litros, desconto de 3% por litro
acima de 20 litros, desconto de 5% por litro
Gasolina:
até 20 litros, desconto de 4% por litro
acima de 20 litros, desconto de 6% por litro Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
*/

var valorGasolina = 2.50, valorAlcool = 1.90;
var tipoCombustivel = "g";
var litros = 21
var valorPagar = 0

if (tipoCombustivel == "G" || tipoCombustivel == "g") {
    if (litros <= 20) {
        valorPagar = (litros * valorGasolina) - (litros * valorGasolina) * (4 / 100)
    } else {
        valorPagar = (litros * valorGasolina) - (litros * valorGasolina) * (6 / 100)

    }
} else if (tipoCombustivel == "a" || tipoCombustivel == "A") {
    if (litros <= 20) {
        valorPagar = (litros * valorAlcool) - (litros * valorAlcool) * (4 / 100)
    } else {
        valorPagar = (litros * valorAlcool) - (litros * valorAlcool) * (6 / 100)

    }
} else {
    console.log("Não vendemos esse combustível!")
}


console.log(tipoCombustivel + " R$ :" + valorPagar)