/* 15) 
    Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
        salário bruto.
        quanto pagou ao INSS.
        quanto pagou ao sindicato.
        o salário líquido.
        calcule os descontos e o salário líquido, conforme a tabela abaixo:

         Salário Bruto : R$
            - IR (11%) : R$
            - INSS (8%) : R$
            - Sindicato (5%) : R$
            = Salário Liquido : R$

            Obs.: Salário Bruto - Descontos = Salário Líquido.
*/


var salarioHora = 33//parseFloat(window.prompt("Valor hora R$:"));
var horaTrabalhada = 120//parseInt(window.prompt("Horas trabalhadas:"));
var salarioBruto = salarioHora * horaTrabalhada
var IR = salarioBruto * 11 / 100
var INSS = salarioBruto * 8 / 100
var sindicato = salarioBruto * 5 / 100
var salarioLiquido = salarioBruto - IR - INSS - sindicato


console.log(`Salário Bruto : R$${salarioBruto}\n - IR (${(IR / salarioBruto) * 100}%) : R$${IR}\n - INSS (${(INSS / salarioBruto) * 100}%) : R$${INSS}\n - Sindicato (${(sindicato / salarioBruto) * 100}%) : R$${sindicato}\n = Salário Liquido (${(salarioLiquido / salarioBruto) * 100}%) : R$${salarioLiquido}`)