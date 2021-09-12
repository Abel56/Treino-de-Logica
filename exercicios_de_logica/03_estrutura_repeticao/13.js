/* 13) Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem. */

var base = 5
var numeroBase = base
var expoente = 5
var resultado = 0;

while (expoente > 1) {
    resultado = numeroBase * base

    numeroBase = resultado
    expoente -= 1
}

console.log(resultado)