/* 6)Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro. */

contador = 1

while (contador <= 10) {
    console.log(contador)
    contador += 1
}


contador = 1
str = ""

while (contador <= 10) {
    str += contador + " ";
    contador += 1
}

console.log(str)