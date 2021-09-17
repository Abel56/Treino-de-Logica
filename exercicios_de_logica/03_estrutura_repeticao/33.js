/* 33)O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.
*/
var temp = 0, maior = 0, menor = 0, op = 0, soma = 0;
for (var i = 1; i == i; i++) {
    temp = parseFloat(window.prompt(`Digite a ${i}° temperatura:`));
    op = +window.prompt(`1 - para encerrar o programa\n2 - para continuar`);
    if (i == 1) {
        menor = temp
    }
    if (temp < menor) {
        menor = temp
    }
    if (temp > maior) {
        maior = temp
    }
    console.log(temp, menor, maior)
    soma += temp

    if (op == 1) {
        console.log("Programa encerrado!")
        break;
    } else if (op != 2) {
        console.log("Programa encerrado!")
        break;
    }



}

media = soma / i

console.log(media)