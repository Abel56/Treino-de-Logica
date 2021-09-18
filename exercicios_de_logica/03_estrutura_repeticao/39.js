/* 39)Faça um programa que leia dez conjuntos de dois valores, o primeiro representando o número do aluno e o segundo representando a sua altura em centímetros. Encontre o aluno mais alto e o mais baixo. Mostre o número do aluno mais alto e o número do aluno mais baixo, junto com suas alturas.
 */
var maisbaixo = 0, codMaisBaixo = 0, maisAlto = 0, codMaisAlto = 0;

for (var i = 1; i == i; i++) {
    var numeroAluno = +window.prompt("Digite o código do " + i + " aluno: ");
    if (numeroAluno == 0) {
        break;
    }
    var alturaAluno = parseFloat(window.prompt("Digite a altura do " + i + " aluno: "));
    if (i == 1) {
        maisbaixo = alturaAluno
        codMaisBaixo = numeroAluno
    }
    if (alturaAluno < maisbaixo) {
        maisbaixo = alturaAluno
        codMaisBaixo = numeroAluno
    }
    if (alturaAluno > maisAlto) {
        maisAlto = alturaAluno
        codMaisAlto = numeroAluno
    }
    console.log(numeroAluno, alturaAluno)
}

console.log(`Código do aluno mais alto ${codMaisAlto}, com ${maisAlto}Cm\nCódigo do aluno mais baixo ${codMaisBaixo}, com ${maisbaixo}Cm`)