/*
    52) Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
        a) Qual é a média de idade do grupo
        b) Quantas pessoas tem mais de 18 anos
        c) Quantas pessoas tem menos de 5 anos
        d) Qual foi a maior idade lida
*/


var contador = 1
var somaIdade = 0
var media;
var maior18 = 0
var menor5 = 0
var maiorIdade = 0

while(contador <= 3){
    var idade = +window.prompt(`Digite a idade da ${contador}° pessoa:`)
    somaIdade += idade
    media = somaIdade / contador
    if(idade > maiorIdade){
        maiorIdade = idade
    }
    if(idade > 18){
        maior18 += 1
    }else if(idade < 5){
        menor5 += 1
    }

    console.log("Idade:"+idade)
    contador += 1
}

console.log(`Média da idade do grupo : ${media} anos\nPessoas com mais de 18 anos: ${maior18}\nPessoas com menos de 5 anos: ${menor5}\nPessoa mais velha : ${maiorIdade}`)


