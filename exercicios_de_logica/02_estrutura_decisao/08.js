/* 8)Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
*/
var preco1 = 180, preco2 = 1190, preco3 = 1390;
var menorPreco = 0

if (preco1 <= preco2 && preco1 <= preco3)
  menorPreco = preco1
else if (preco2 <= preco1 && preco2 <= preco3)
  menorPreco = preco2



console.log(menorPreco)


/* else if (preco3 < preco1 && preco3 < preco2)
  menorPreco = preco3 */