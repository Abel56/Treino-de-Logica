/*
    57) Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. 
        No final, mostre o total de salários pagos aos homens e o total pago às 
        mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não 
        sempre que ler os dados de um funcionário.
*/

var contador = 1
var somaSexoM = 0
var somaSalarioM = 0, somaSalarioF = 0, somaSexoF = 0
while (contador == contador) {
    var salario = parseFloat(window.prompt(`Digite o salário da ${contador}° pessoa R$:`));
    var sexo = window.prompt(`Digite o sexo da ${contador}° pessoa:`);

    if (sexo == "m" || sexo == "M") {
        somaSalarioM += salario
        somaSexoM += 1

        console.log(`Total Homens :${somaSexoM}\nTotal Salario Homens R$:${somaSalarioM}`)

    } else if (sexo == "F" || sexo == "f") {
        somaSalarioF += salario
        somaSexoF += 1
        console.log(`Total Mulheres :${somaSexoF}\nTotal Salario Mulheres R$:${somaSalarioF}`)
    } else {
        console.log("Informação inválida!")
        break;
    }

    var end = window.prompt("Deseja continuar? Digite 1 para sim e 2 para não");

    if (end == 2) {
        console.log("Programa encerrado!")
        break;
    } else if (end != 1 && end != 2) {
        console.log("Informação inválida!!")
        console.log("Programa encerrado!")
        break;
    }

    contador += 1
}

