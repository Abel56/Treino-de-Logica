/*
    34) O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no 
peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o 
indivíduo dentro de certas faixas.
 - abaixo de 18.5: Abaixo do peso
 - entre 18.5 e 25: Peso ideal
 - entre 25 e 30: Sobrepeso
 - entre 30 e 40: Obesidade
 - acima de 40: Obseidade mórbida
Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado 
da altura)
*/

var peso = 86
var altura = 1.82
var imc = peso / (altura ** 2)

if (imc <= 18.5) {
    console.log(`IMC ${imc.toFixed(2)}, você está abaixo do peso.`)
} else if (imc > 18.5 && imc <= 25) {
    console.log(`IMC ${imc.toFixed(2)}, você está com o peso ideal.`)
} else if (imc > 25 & imc <= 30) {
    console.log(`IMC ${imc.toFixed(2)}, você está com sobrepeso`)
} else if (imc > 30 && imc <= 40) {
    console.log(`IMC ${imc.toFixed(2)}, você está obeso!`)
} else {
    console.log(`IMC ${imc.toFixed(2)}, você está com obesidade mórbida, procure um médico urgentemente!`)
}