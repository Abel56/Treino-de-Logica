/*
    70) [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência 
    de Fibonacci:
    P U T
    1 1 2 3 5 8 13 21...

*/
var ultimo = 1, penultimo = 1, termo = 0;

console.log(ultimo+'\n'+penultimo)
var n = 10/* +window.prompt("Digite um número:") */
for (i = 1; i <= n; i++) {
    termo = ultimo + penultimo
    penultimo = ultimo
    ultimo = termo

    console.log(termo)
}

