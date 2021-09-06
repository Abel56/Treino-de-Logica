/*
  60) Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas. 
    O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
    a) O nome da pessoa mais velha
    b) O nome da mulher mais jovem
    c) A média de idade do grupo
    d) Quantos homens tem mais de 30 anos
    e) Quantas mulheres tem menos de 18 anos
*/


var contador = 1, fim;
var maisVelho = 0, nomeMaisVelho;
var somaIdade = 0, media;
var homem30 = 0
var mulher18 = 0, mulherMaisJovem = 0; contadorMulher = 0
while (contador == contador) {
    var nome = window.prompt(`Digite o nome da ${contador}° pessoa:`)
    var sexo = window.prompt(`Digite o sexo da ${contador}° pessoa:`)
    var idade = +window.prompt(`Digite a idade da ${contador}° pessoa:`)
    document.write(`Nome: ${nome} - Sexo: ${sexo} - Idade ${idade} <br>`)

    somaIdade += idade
    media = somaIdade / contador

    if (idade > maisVelho) {
        maisVelho = idade
        nomeMaisVelho = nome
    }

    if (sexo == "m" || sexo == "M") {
        if (idade > 30)
            homem30 += 1
    } else if (sexo == 'f' || sexo == "F") {
        contadorMulher += 1
        if (idade < 18) {
            mulher18 += 1
        }
        if (contadorMulher == 1) {
            mulherMaisJovem = idade
        }
        if (idade < mulherMaisJovem) {
            mulherMaisJovem = idade
        }

    }




    fim = +window.prompt("Deseja continuar? 1 para sim // 2 para não")
    if (fim == 2 || fim == 2) {
        document.write(`Programa encerrado! <br>`)
        break;
    } else if (fim != 1) {
        document.write(` Informação inválida! Programa encerrado! <br>`)
        break;
    }
    contador += 1
}



document.write(`Pessoa mais velha: ${nomeMaisVelho} - Sexo: ${sexo} - Idade ${idade} <br>`)
document.write(`A média de idade do grupo é ${media.toFixed(2)} anos <br>`)
document.write(`Homens maiores de 30 anos: ${homem30} <br>`)
document.write(`Mulheres menores de 18 anos: ${mulher18} <br>`)
document.write(`Mulher mais jovem: ${mulherMaisJovem} anos <br>`)