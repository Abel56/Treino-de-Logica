/* 11)As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
        Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
        salários até R$ 280,00 (incluindo) : aumento de 20%
        salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
        salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
        salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
        o salário antes do reajuste;
        o percentual de aumento aplicado;
        o valor do aumento;
        o novo salário, após o aumento.*/

var salario = 1400 //parseFloat(window.prompt("Salário R$:"));
var valorAumento, porcentoAumento;
if (salario <= 280) {
    valorAumento = salario * (20 / 100);
} else if (salario > 280 && salario <= 700) {
    valorAumento = salario * (15 / 100);
} else if (salario > 700 && salario <= 1500) {
    valorAumento = salario * (10 / 100);
} else {
    valorAumento = salario * (5 / 100);
}
novoSalario = salario + valorAumento;
porcentoAumento = valorAumento / salario * 100

console.log(`Salário atual R$${salario}\nVocê irá receber um aumento de ${porcentoAumento}%\nValor de aumento R$${valorAumento}\nNovo salário R$${novoSalario}`)