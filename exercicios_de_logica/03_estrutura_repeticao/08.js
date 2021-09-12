/* 8) Faça um programa que leia 5 números e informe a soma e a média dos números.*/

var contador = 1
var soma = 0, nota = 0;

while (contador <= 5) {

    nota = parseFloat(window.prompt(`${contador}° nota:`));
    soma += nota

    console.log(nota)
    contador += 1
}
media = soma / (contador - 1)

console.log(media)