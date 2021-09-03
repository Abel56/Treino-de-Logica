/*
   28) Faça um programa que leia a largura e o comprimento de um terreno 
    retangular, calculando e mostrando a sua área em m². O programa também 
    devemostrar a classificação desse terreno, de acordo com a lista abaixo:
    - Abaixo de 100m² = TERRENO POPULAR
    - Entre 100m² e 500m² = TERRENO MASTER
    - Acima de 500m² = TERRENO VIP
*/

var ladoA = 9
var ladoB = 9
var area = ladoA * ladoB

if (area < 100) {
    console.log(`Terreno popular`)
} else if (area >= 100 && area <= 500) {
    console.log("Terreno Master")
} else {
    console.log("Terreno Vip")
}
