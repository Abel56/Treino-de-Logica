/*
   [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta. 
    Analise seus comprimentos e diga se é possível formar um triângulo com essas 
    retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento 
    de cada lado deve ser maior que a soma dos outros dois.
*/


var ladoA = 3
var ladoB = 7
var ladoC = 8

if (ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoC + ladoA > ladoB) {
    console.log(`Pode formar um triãngulo`)
} else {
    console.log(`Não pode formar um triângulo`)
}