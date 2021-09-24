/* 76) Crie um programa que preencha automaticamente um vetor numérico com 7
números gerados aleatoriamente pelo computador e depois mostre os valores 
gerados na tela */

var vetor = []



for (let i = 0; i < 7; i++) {
    var numero = parseInt(Math.random() * 50)
    vetor[i] = numero
}

console.log(vetor)