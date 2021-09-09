/* 12)
Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
Desconto do IR:
Salário Bruto até 900 (inclusive) - isento
Salário Bruto até 1500 (inclusive) - desconto de 5%
Salário Bruto até 2500 (inclusive) - desconto de 10%
Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
        Salário Bruto: (5 * 220)        : R$ 1100,00
        (-) IR (5%)                     : R$   55,00
        (-) INSS ( 10%)                 : R$  110,00
        FGTS (11%)                      : R$  121,00
        Total de descontos              : R$  165,00
        Salário Liquido                 : R$  935,00
        */
var valorHoras = 5;
var horasT = 220;
var salarioBruto = valorHoras * horasT, IR = 0;
var INSS = salarioBruto * (10 / 100)
var FGTS = salarioBruto * (11 / 100)

if (salarioBruto > 900 && salarioBruto <= 1500) {
    IR = salarioBruto * (5 / 100)
} else if (salarioBruto > 1500 && salarioBruto <= 2500) {
    IR = salarioBruto * (10 / 100)
} else if (salarioBruto > 2500) {
    IR = salarioBruto * (20 / 100)
} else {
    IR = 0
}
var salarioLiquido = salarioBruto - IR - INSS

console.log(`Salário Bruto:      : R$ ${salarioBruto}`)
console.log(`IR ${IR / salarioBruto * 100}%               : R$ ${IR}`)
console.log(`INSS ${INSS / salarioBruto * 100}%            : R$ ${INSS}`)
console.log(`FGTS ${FGTS / salarioBruto * 100}%            : R$ ${FGTS}`)
console.log(`Total de descontos  : R$ ${IR + INSS}`)
console.log(`Salário Liquido     : R$ ${salarioLiquido}`)