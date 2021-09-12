/* 4) Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
 */

var popA = 80000, popB = 200000;
var contadorAnos = 0;

while (popB >= popA) {
    popA += (3 / 100) * popA
    popB += (1.5 / 100) * popA

    contadorAnos += 1

    console.log(`População A : ${popA}\nPopulação B: ${popB}\nAnos decorridos: ${contadorAnos}`)
    console.log("------------------------------")
}

