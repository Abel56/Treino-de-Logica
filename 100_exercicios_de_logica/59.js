/*
  59) Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai 
        perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
        a) qual é a maior idade lida
        b) quantos homens foram cadastrados
        c) qual é a idade da mulher mais jovem
        d) qual é a média de idade entre os homens
*/

var contador = 1, maiorIdade = 0, somaSexoM = 0, menorIdadeMulher = 0, mediaIdadeHomens = 0, somaIdade = 0

while (contador == contador) {
    var idade = +window.prompt(`Digite a idade da ${contador}° pessoa:`)
    var sexo = window.prompt(`Digite o sexo da ${contador}° pessoa F/M :`)
    if(contador == 1 && sexo == "f" || sexo == "F"){
        menorIdadeMulher = idade
    }
    console.log("Idade " + idade + " Sexo:" + sexo)

    if (idade > maiorIdade)
        maiorIdade = idade

    if (sexo == 'm' || sexo == 'M') {
        somaSexoM += 1
        somaIdade += idade
        mediaIdadeHomens = somaIdade / somaSexoM
    } else if (sexo == 'f' || sexo == "F") {
            if(idade < menorIdadeMulher){
                menorIdadeMulher = idade    
            }
    }else{
        console.log("Informação inválida!")
        break;
    }
    var end = parseInt(window.prompt("Deseja continuar? 1 - sim // 2 - não"))
    if (end == 2) {
        console.log("Programa encerrado!!")
        break;
    } else if (end != 1) {
        console.log("Programa encerrado!!")
        break;
    }
    contador += 1
}

console.log(`A pessoa mais velha do grupo têm ${maiorIdade} anos.\nForam cadastrados ${somaSexoM} homens.\nA média de idade entre os homens é ${mediaIdadeHomens} anos\nA mulher mais jovem possui ${menorIdadeMulher} anos`);
