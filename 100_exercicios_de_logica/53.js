/*
    53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
        a) Quantos homens foram cadastrados
        b) Quantas mulheres foram cadastradas
        c) A média de idade do grupo
        d) A média de idade dos homens
        e) Quantas mulheres tem mais de 20 anos
*/


var contador = 1, somaH = 0 , somaF = 0 ,mediaIdadeH ,mediaIdadeF ,somaIdade = 0 ,somaIdadeH = 0 ,somaIdadeF = 0, soma20 = 0

while(contador <= 5){
    var idade = +window.prompt(`Digite a idade da ${contador}º pessoa`);
    var sexo =   window.prompt(`Digite o sexo da ${contador}º pessoa`);
    somaIdade += idade
    if(sexo == "m" || sexo == "M"){
        somaH += 1
        somaIdadeH += idade
        mediaIdadeH = somaIdadeH / somaH
    }else if(sexo == "f" || sexo == "F"){
        somaF += 1
        somaIdadeF += idade
        mediaIdadeF = somaIdadeF / somaF
        if(idade > 20)
        soma20 += 1
    }else{
        console.log("Informação inválida!")
    }
    mediaIdade = (somaIdade / contador)
    contador += 1
}


console.log(`Homens cadastrados: ${somaH}\nMulheres cadastradas: ${somaF}\nMédia de idade do grupo: ${mediaIdade}\nMédia de idade dos homens : ${mediaIdadeH}\nMédia idade das mulheres : ${mediaIdadeF}\nMulheres com mais de 20 anos: ${soma20}`)