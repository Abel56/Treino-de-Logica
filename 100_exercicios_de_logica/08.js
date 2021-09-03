/*
8) Desenvolva um programa que leia uma distância em metros e mostre os valores 
relativos em outras medidas.
Ex: 
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm
*/

var metros = 185.72
console.log(`A distância de ${metros} corresponde a:\n${metros/1000}Km\n${metros/100}Hm\n${metros/10}Dam\n${metros*10}Dm\n${metros*100}Cm\n${metros*1000}mm`)

