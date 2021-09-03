/*
   18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade 
    dela e depois mostre se ela pode ou não votar.
*/

var anoNascimento = 2005
var anoAtual = 2021
var idade = anoAtual - anoNascimento

if (idade >= 16) {
    console.log("Já pode votar")
} else {
    console.log("Ainda não pode votar")
}

console.log(idade)