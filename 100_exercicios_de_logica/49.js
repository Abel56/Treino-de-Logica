/*
    49) Crie um programa que leia 6 números inteiros e no final mostre quantos deles 
    são pares e quantos são ímpares.
*/

    var contador = 0
    var par = 0
    var impar = 0
    while(contador < 3){
        contador += 1
        
        var numero = +window.prompt(`Digite o ${contador}º número:`);
        if(numero % 2 == 0){
            par += 1
        }else if(numero % 2 != 0){
            impar += 1
        }
       
 
    }

    console.log(par,impar)

 
