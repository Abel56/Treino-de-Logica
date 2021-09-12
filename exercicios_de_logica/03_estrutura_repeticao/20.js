/* 20) Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16.*/


var numero = 5//+window.prompt("Número: ");
var fatorial = 1
if (numero >= 16) {
    console.log("Apenas números inferiores a 16!");
} else if (numero < 0) {
    console.log("Números negativos não permitido!");
} else {
    while (numero >= 1) {
        fatorial = fatorial * numero
        console.log(numero)
        numero -= 1
    }
    console.log(fatorial)
}





