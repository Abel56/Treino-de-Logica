/*
   21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não 
BISSEXTO
*/


var ano = 2022

if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
    console.log(`${ano} é bissexto`)
} else {
    console.log(`${ano} não é bissexto`)
}
