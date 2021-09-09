/* 9)Faça um Programa que leia três números e mostre-os em ordem decrescente. */

var a = 17, b = 15, c = 91;
var aux;

if (c > a) {
    aux = c
    c = a
    a = aux
}

if (c > b) {
    aux = c
    c = b
    b = aux
}

if (b > a) {
    aux = b
    b = a
    a = aux
}



console.log(a, b, c)

