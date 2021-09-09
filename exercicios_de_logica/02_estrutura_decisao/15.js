/* Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
Dicas:
Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
Triângulo Equilátero: três lados iguais;
Triângulo Isósceles: quaisquer dois lados iguais;
Triângulo Escaleno: três lados diferentes;
  */

var ladoA = 4, ladoB = 5, ladoC = 11;

if (ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoC + ladoA > ladoB) {
    if (ladoA == ladoB && ladoB == ladoC) {
        console.log("Pode formar um triângulo Equilátero!")
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        console.log("Pode formar um triângulo Isósceles")
    } else {
        console.log("Pode formar um triângulo Escaleno")
    }
} else {
    console.log("Não pode formar um triângulo!")
}