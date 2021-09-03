/*
    33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra 
    de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e 
    em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que 
    ela não pode exceder 30% do salário ou então o empréstimo será negado
*/


var valorImovel = 250000
var salario = 3450
var financiamento = 25


var mensalidade = valorImovel / (financiamento * 12)
var porcento = 30 / 100 * salario


if (mensalidade > porcento) {
    console.log("Empréstimo negado!")
} else {
    console.log("Empréstimo aprovado!")
}
console.log(mensalidade, porcento)
