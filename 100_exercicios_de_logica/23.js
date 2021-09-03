/*
    23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos 
    para todos, mas especialmente para mulheres. Faça um programa que leia nome, 
    sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo 
    que:
 - Homens ganham 5% de desconto
 - Mulheres ganham 13% de desconto

*/

var nome = 'Michele'
var sexo = 'd'
var valor = 1280.00

if (sexo == 'f' || sexo == "F") {
    desconto = valor - (13 / 100) * valor
    porcento_desconto = (valor - desconto) / valor * 100
} else if (sexo == 'm' || sexo == "M") {
    desconto = valor - (5 / 100) * valor
    porcento_desconto = (valor - desconto) / valor * 100
} else {
    console.log("Desconto não aplicado")
    desconto = 0
    porcento_desconto = 0
}

console.log(
    `
            ${nome}\n
            valor da compra: R$${valor}\n
            valor com desconto: R$${desconto}\n
            desconto de ${porcento_desconto.toFixed(2)}%    

        `
)
