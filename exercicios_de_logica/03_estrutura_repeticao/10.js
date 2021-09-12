/* 10) Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.*/


var n1 = 200//+window.prompt("Numero 1: ");
var n2 = 100//+window.prompt("Numero 2: ");
if (n1 > n2) {
    while (n1 > n2) {
           n1 -= 1
           console.log(n1) 
    }
} else {
    while (n1 < n2) {
        n1+= 1
        console.log(n1)
    }
}
