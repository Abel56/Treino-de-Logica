/*
    54) Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando 
        no final:
        a) Qual foi a média de altura do grupo
        b) Quantas pessoas pesam mais de 90Kg
        c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
        d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg
*/

var contador = 1, media = 0, media_altura = 0, somaPeso50 = 0, somaPeso100 = 0, somaPeso = 0, somaAltura = 0


while (contador <= 7) {
    var altura = +window.prompt(`Digite a altura da ${contador}º pessoa:`);
    var peso = +window.prompt(`Digite o peso da ${contador}º pessoa:`);

    somaAltura += altura
    media_altura = somaAltura / contador

    if (peso > 90) {
        somaPeso += 1
    }
    if (peso < 50 && altura < 1.60) {
        somaPeso50 += 1
    } else if (peso > 100 && altura > 1.90) {
        somaPeso100 += 1
    }
    console.log(altura, peso)
    contador += 1
}

console.log("Media de altura: " + media_altura);
console.log('Quantas pessoas pesam mais de 90Kg: ' + somaPeso);
console.log("Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m: " + somaPeso50);
console.log("Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg: " + somaPeso100);