/* 73) Crie um programa que preencha automaticamente (usando lógica, não apenas 
    atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
    9 8 7 6 5 4 3 2 1 0
    0 1 2 3 4 5 6 7 8 9 */

var vetor = [];


for (let i = 9; i >= 0; i--) {
    vetor[i] = 9 - i
}
console.log(vetor)