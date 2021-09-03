/*
    12) Crie um programa que leia o preço de um produto, calcule e mostre o seu 
    PREÇO PROMOCIONAL, com 5% de desconto.  
*/

var valorProduto = 98.76
var valorPromocao = valorProduto - ((16 / 100) * valorProduto)
var porcentoDesconto = ((valorProduto - valorPromocao) / valorProduto * 100).toFixed(2)

console.log(valorPromocao)

console.log(porcentoDesconto)
