/*
   29) Desenvolva um programa que leia o nome de um funcionário, seu salário, 
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de 
acordo com a tabela a seguir:
 - Até 3 anos de empresa: aumento de 3%
 - entre 3 e 10 anos: aumento de 12.5%
 - 10 anos ou mais: aumento de 20%
*/

var nome = "Abel"
var salario = 1280.00
var anoEmpresa = 11

if (anoEmpresa <= 3) {
    novoSalario = salario + (3 / 100 * salario)
    aumento = (novoSalario - salario) / salario * 100
} else if (anoEmpresa > 3 && anoEmpresa <= 10) {
    novoSalario = salario + (12.5 / 100 * salario)
    aumento = (novoSalario - salario) / salario * 100
} else {
    novoSalario = salario + (20 / 100 * salario)
    aumento = (novoSalario - salario) / salario * 100
}

console.log(`Salário atual R$${salario}\nNovo salário R$${novoSalario}\nReajuste de :${aumento}%`)
