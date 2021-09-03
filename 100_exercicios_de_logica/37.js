/*
    37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um 
aumento de acordo com alguns fatores. Faça um programa que leia o salário atual, 
o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa. 
No final, mostre o seu novo salário, baseado na tabela a seguir:
- Mulheres
 - menos de 15 anos de empresa: +5%
 - de 15 até 20 anos de empresa: +12%
 - mais de 20 anos de empresa: +23%
- Homens
 - menos de 20 anos de empresa: +3%
 - de 20 até 30 anos de empresa: +13%
 - mais de 30 anos de empresa: +25%

*/

var salario_atual = 1780
var sexo = 'm'
var tempo_de_casa = 5
var reajuste;
var salario_reajustado;

if (sexo == "f" || sexo == "F") {
    if (tempo_de_casa < 15) {
        salario_reajustado = salario_atual + ((5 / 100) * salario_atual)
    } else if (tempo_de_casa >= 15 && tempo_de_casa <= 20) {
        salario_reajustado = salario_atual + ((12 / 100) * salario_atual)
    } else {
        salario_reajustado = salario_atual + ((23 / 100) * salario_atual)
    }
} else if (sexo == "m" || sexo == "M") {
    if (tempo_de_casa < 15) {
        salario_reajustado = salario_atual + ((3 / 100) * salario_atual)
    } else if (tempo_de_casa >= 15 && tempo_de_casa <= 20) {
        salario_reajustado = salario_atual + ((13 / 100) * salario_atual)
    } else {
        salario_reajustado = salario_atual + ((25 / 100) * salario_atual)
    }
} else {
    console.log("Dados inválidos!")
}

if (sexo == "f" || sexo == "F" || sexo == "m" || sexo == "M") {

    reajuste = (salario_reajustado - salario_atual) / salario_atual * 100

    console.log(`O seu salário atual é : R$${salario_atual}\nVocê obteve um aumento de ${reajuste.toFixed(2)}% e passará a receber: R$${salario_reajustado}`)
}
