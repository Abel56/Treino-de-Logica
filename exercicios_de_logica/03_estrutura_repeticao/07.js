/* 7) Faça um programa que leia 5 números e informe o maior número. */

contador = 1
maior = 0
while (contador <= 5) {
    var numero = +window.prompt(contador + "° Número");
    if (numero > maior) {
        maior = numero
    }
    console.log(numero)
    contador += 1
}

console.log("Maior número :" + maior)

