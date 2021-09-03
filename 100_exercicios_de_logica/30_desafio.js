/*
   30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo 
de triângulo será formado: 
 - EQUILÁTERO: todos os lados iguais
 - ISÓSCELES: dois lados iguais
 - ESCALENO: todos os lados diferentes
*/

var ladoA = 8
var ladoB = 7
var ladoC = 2

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
   if (ladoA == ladoB && ladoB == ladoC) {
      console.log("Pode formar um triângulo equilátero")
   } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
      console.log("Pode formar um triângulo isósceles")
   } else {
      console.log('Pode formar um triângulo escaleno')
   }
} else {
   console.log("Não pode formar um triângulo")
}

