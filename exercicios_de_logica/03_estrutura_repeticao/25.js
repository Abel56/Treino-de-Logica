/* 25)Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa, conforme a média calculada. */



var somaIdade = 0, mediaIdade = 0;
var op = 0;
for (var i = 1; i == i; i++) {
    var idade = +window.prompt(`${i}° idade: `);
    somaIdade += idade
    console.log(idade)
    console.log(i)
    op = window.prompt("1 - Encerrar\n 2 - continuar")
    if (op == 1) {
        break;
    } else if (op != 2) {
        break;
    }
}
mediaIdade = somaIdade / i
if (mediaIdade <= 25) {
    console.log("Grupo Jovem")
} else if (mediaIdade <= 60) {
    console.log("Grupo Adulto")
} else {
    console.log("Grupo Idoso")
}
console.log(mediaIdade)