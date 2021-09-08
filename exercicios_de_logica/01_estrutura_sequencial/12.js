/*  12) Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
 */

var altura = 1.8//parseFloat(window.prompt("Altura:"));
var peso = 89//parseFloat(window.prompt("Peso:"));

var pesoIdeal = (72.7 * altura) - 58

console.log(`O seu peso atual é ${peso}Kg\nO seu peso ideal é ${pesoIdeal.toFixed(2)}Kg`)