/* 4) Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
 
5) Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

*/

var popA = 80000/* +window.prompt("População país A:") */, popB = 200000//+window.prompt("População país B:");
var taxaA = 3.5,/*Taxa de crescimento país A*/taxaB = 3 //Taxa de crescimento país B
var contadorAnos = 0;

if (popA > popB) {
    if (taxaA < taxaB) {
        while (popB >= popA) {
            popA += (taxaA / 100) * popA
            popB += (taxaB / 100) * popA

            contadorAnos += 1

            console.log(`População A : ${popA}\nPopulação B: ${popB}\nAnos decorridos: ${contadorAnos}`)
            console.log("------------------------------")
        }
    }
} else if (popB > popA) {
    if (taxaB < taxaA) {
        while (popB >= popA) {
            popA += (taxaA / 100) * popA
            popB += (taxaB / 100) * popA

            contadorAnos += 1

            console.log(`População A : ${popA}\nPopulação B: ${popB}\nAnos decorridos: ${contadorAnos}`)
            console.log("------------------------------")
        }
    } else {
        console.log("Informações inseridas de maneira errada!")
    }
}
