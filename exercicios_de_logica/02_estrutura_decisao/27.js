/*27)
Uma quitanda está vendendo frutas com a seguinte tabela de preços:
                      Até 5 Kg           Acima de 5 Kg
Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
Maçã            R$ 1,80 por Kg          R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
*/

var KgMorango = 5, KgMaca = 5;
var kgFrutas = KgMorango + KgMaca
var valorMorango = 0, valorMaca = 0;
var totalCompra = 0;
if (KgMorango <= 5) {
    valorMorango = 2.50
    valorMorango *= KgMorango

} else if (KgMorango > 5) {
    valorMorango = 2.20
    valorMorango *= KgMorango
}
if (KgMaca <= 5) {
    valorMaca = 1.80
    valorMaca *= KgMaca
} else if (KgMaca > 5) {
    valorMaca = 1.50
    valorMaca *= KgMaca
}
totalCompra = valorMaca + valorMorango

if (totalCompra > 25 || kgFrutas >= 8) {
    totalCompra = totalCompra - (totalCompra * 10 / 100)
}


console.log(valorMaca, valorMorango, totalCompra)