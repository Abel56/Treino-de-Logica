/* 6) Faça um Programa que peça o raio de um círculo, calcule e mostre sua área. A = pi . r**2 */

var raio = 5//parseFloat(window.prompt("Digite o raio do circulo:"));
var pi = 3.1415;

var area = (raio ** 2) * pi
console.log(area.toFixed(2))