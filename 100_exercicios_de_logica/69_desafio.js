/*
 69) [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma
    PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
    a soma entre todos os valores da sequência.
*/

var termoA = 4
var razao = 8

for (i = 1; i < 10; i++) {
    if (i == 1) {
        console.log(termoA)
    }
    console.log(termoA + razao)

    termoA += razao

}