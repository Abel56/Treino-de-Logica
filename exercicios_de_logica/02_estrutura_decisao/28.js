/*28)
 O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
                      Até 5 Kg           Acima de 5 Kg
File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.
*/

var fileFrango = 0, alcatra = 0, picanha = 0;
var tipoCarne = 4; // 1 - Filé de Frango / 2 - alcatra / 3 - picanha
var kgComprado = 8; precoTotal = 0;
var cartaoTabajara = true, valorDesconto = 0;
var valor_a_pagar = 0

if (tipoCarne == 1) {
    tipoCarne = "Frango"
    if (kgComprado <= 5) {
        fileFrango = 4.90 * kgComprado
        precoTotal = fileFrango
    } else {
        fileFrango = 5.80 * kgComprado
        precoTotal = fileFrango
    }
} else if (tipoCarne == 2) {
    tipoCarne = "Alcatra"
    if (kgComprado <= 5) {
        alcatra = 5.90 * kgComprado
        precoTotal = alcatra
    } else {
        alcatra = 6.80 * kgComprado
        precoTotal = alcatra
    }
} else if (tipoCarne == 3) {
    tipoCarne = "Picanha"
    if (kgComprado <= 5) {
        picanha = 6.90 * kgComprado
        precoTotal = picanha
    } else {
        picanha = 7.80 * kgComprado
        precoTotal = picanha
    }
} else {
    console.log("Carne em falta!")
}
if (cartaoTabajara) {
    valorDesconto = 5 / 100 * precoTotal
    precoTotal -= valorDesconto
    cartaoTabajara = "Sim"
} else {
    cartaoTabajara = "Não"
}
valor_a_pagar = precoTotal - valorDesconto
console.log(`Tipo de Carne: ${tipoCarne}\nKg:${kgComprado}\nValor da compra R$${precoTotal}\nCartão Tabajara? ${cartaoTabajara}\nDesconto: R$${valorDesconto}\nValor à pagar R$${valor_a_pagar}`)
