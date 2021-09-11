/*
25) Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
"Telefonou para a vítima?"
"Esteve no local do crime?"
"Mora perto da vítima?"
"Devia para a vítima?"
"Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente"..
*/

var q1 = false//"Telefonou para a vítima?"
var q2 = false//"Esteve no local do crime?"
var q3 = false//"Mora perto da vítima?"
var q4 = false//"Devia para a vítima?"
var q5 = true//"Já trabalhou com a vítima?"
var contadorCulpa = 0

if (q1)
    contadorCulpa += 1
if (q2)
    contadorCulpa += 1
if (q3)
    contadorCulpa += 1
if (q4)
    contadorCulpa += 1
if (q5)
    contadorCulpa += 1

if (contadorCulpa < 2) {
    console.log("Inocente")
} else if (contadorCulpa == 2) {
    console.log("Suspeito!")
} else if (contadorCulpa > 2 && contadorCulpa <= 4) {
    console.log("Cúmplice!")
} else {
    console.log("Assassino!")
}

console.log(contadorCulpa)