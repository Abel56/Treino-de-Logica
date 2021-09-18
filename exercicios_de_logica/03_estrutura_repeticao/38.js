/*
 38)Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:
Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. Faça um programa que determine o salário atual desse funcionário. Após concluir isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário. */


var salarioAtual = 1000
var novoSalario = 0
var porcentagem = 1.5
var anoAdmissao = 1995
var anoAtual = 2000;

var contador = 1


while (anoAdmissao <= anoAtual) {
    if (contador == 1) {
        console.log(`${anoAdmissao} - Salário R$:${salarioAtual}`)
        contador++
    } else {
        novoSalario = salarioAtual + (salarioAtual * (porcentagem / 100))
        console.log(`${anoAdmissao} - Salário R$:${novoSalario}`)
        salarioAtual = novoSalario
        porcentagem += 1.5

    }

    anoAdmissao++
}
