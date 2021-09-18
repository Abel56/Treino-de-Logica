/* 3)Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro informado pelo usuário. */


var primo = 13 //window.prompt("Número");
var div = 0
for (var i = 1; i <= 20; i++) {
    if (primo % i == 0) {
        div += 1
    }

    if (i == primo) {

        if (div > 2) {
            console.log(primo + " Não é primo!")

        } else {
            console.log(primo + " É primo!")
        }
        console.log("============")
        i = 0
        primo -= 1
        div = 0
    }
}




