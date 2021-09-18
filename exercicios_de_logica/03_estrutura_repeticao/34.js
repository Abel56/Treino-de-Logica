/* 34)Os números primos possuem várias aplicações dentro da Computação, por exemplo na Criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. */


var primo = 5 //window.prompt("Número");
var div = 0
for (var i = 1; i <= 20; i++) {
    if (primo % i == 0) {
        div += 1
    }
}
if (div > 2) {
    console.log("Não é primo");
} else {
    console.log("Eh primo");
}


