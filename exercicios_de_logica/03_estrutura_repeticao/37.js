/* 37)Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto, o mais baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada um dos clientes da academia seu código, sua altura e seu peso. O final da digitação de dados deve ser dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar o programa também deve ser informados os códigos e valores do clente mais alto, do mais baixo, do mais gordo e do mais magro, além da média das alturas e dos pesos dos clientes
 */
var maisAlto = 0, maisBaixo = 0, maisGordo = 0, maisMagro = 0;
var codMaisAlto = 0, codMaisBaixo = 0, codMaisGordo = 0, codMaisMagro = 0;

for (var i = 1; i == i; i++) {
    var cod = +window.prompt("Código: ");
    if (cod == 0 || cod < 0) {
        console.log("Programa encerrado");
        break;
    }
    var altura = parseFloat(window.prompt("Altura: "));
    var peso = parseFloat(window.prompt("Peso: "));
    console.log(altura, peso)
    if (i == 1) {
        maisBaixo = altura
        maisMagro = peso
        codMaisBaixo = cod
        codMaisMagro = cod
    }


    if (altura < maisBaixo) {
        maisBaixo = altura
        codMaisBaixo = cod
    }
    if (peso < maisMagro) {
        maisMagro = peso
        codMaisMagro = cod
    }


    if (altura > maisAlto) {
        maisAlto = altura
        codMaisAlto = cod
    }
    if (peso > maisGordo) {
        maisGordo = peso
        codMaisGordo = cod
    }

    console.log(`\nMais gordo: ${maisGordo}Kg Código:${codMaisGordo}\nMais Alto: ${maisAlto} Código: ${codMaisAlto}`)
    console.log(`\nMais magro: ${maisMagro}Kg Código:${codMaisMagro}\nMais Baixo: ${maisBaixo} Código: ${codMaisBaixo}`)

}

