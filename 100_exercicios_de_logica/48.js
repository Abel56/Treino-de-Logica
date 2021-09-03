/*
    48) Faça um programa que leia 7 números inteiros e no final mostre o somatório 
        entre eles.
*/

    var contador = 0
    var soma = 0
    while(contador <3){
        contador += 1

        var numero = +window.prompt(`Digite o ${contador}º número:`);

        soma += numero
        
    }

    console.log(soma)





