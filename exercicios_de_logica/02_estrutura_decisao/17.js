/*17)Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.

  */

var ano = 2024

if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
    console.log("Ano bissexto");
} else {
    console.log("Não é bissexto")
}

