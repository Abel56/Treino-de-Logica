/* 13) Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7
*/

var altura = 1.8//parseFloat(window.prompt("Altura:"));
var peso = 89//parseFloat(window.prompt("Peso:"));

var PesoIdealHomem = (72.7*altura) - 58
var PesoIdealMulher = (62.1*altura) - 44.7

console.log(`O seu peso atual é ${peso}Kg\nO seu peso ideal sendo homem é ${PesoIdealHomem.toFixed(2)}Kg e sendo mulher ${PesoIdealMulher}kg`)