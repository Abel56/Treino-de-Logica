/* 14) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.*/

var contador = 1, numero, par = 0, impar = 0

while (contador <= 10) {
    numero = +window.prompt(`${contador}° numero: `);
    if (numero % 2 == 0) {
        par += 1
    } else {
        impar += 1
    }
    console.log(numero)
    contador += 1
}
console.log(impar, par)
