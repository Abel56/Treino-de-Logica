/*
   17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 
    80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba 
    o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
*/

var velocidade = 131 //km

if (velocidade > 80) {
    var multa = (velocidade - 80) * 5

    console.log("Você foi multado \nValor da multa: R$" + multa)

}

