/* 
28)Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o valor para em cada um.
 */

var numerosCD = +window.prompt("Digite quantos CD foram comprados: ");
var valorCD = 0, somaValor = 0;

for (var i = 1; numerosCD >= i; i++) {
    valorCD = parseFloat(window.prompt(`Valor do ${i}° CD R$: `));
    console.log(`Valor do ${i}° CD R$: ${valorCD.toFixed(2)}`);
    somaValor += valorCD
    console.log(`Total investido em CDS R$: ${somaValor}`)
}

var media = somaValor / numerosCD
console.log(`Média de valor por CD R$${media}`)