/* 09) aça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
    C = 5 * ((F-32) / 9).. */



var tempF = 30//parseFloat(window.prompt("Digite a temperatura em Fahrenheit:"));
var tempC = 5 * ((tempF - 32) / 9)
console.log(tempC)