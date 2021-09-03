/*
  22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua 
situação em relação ao alistamento militar.
 - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o 
alistamento.
 - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do 
alistamento.

*/

var anoNascimento = 2005
var anoAtual = 2021
var idade = anoAtual - anoNascimento

if (idade < 18) {
    alistamento = 18 - idade
    console.log(`Você possui ${idade} anos\nAinda faltam ${alistamento} anos para seu alistamento.`)
} else if (idade > 18) {
    alistamento = idade - 18
    console.log(`Você possui ${idade} anos\nJá se passaram ${alistamento} anos do seu alistamento.`)
} else {
    console.log(`Você possui ${idade} anos\n precisa se alistar esse ano!`)
}
