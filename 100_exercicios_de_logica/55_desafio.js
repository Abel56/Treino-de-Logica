/*
    [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o 
    jogador vai tentar descobrir qual foi o valor sorteado
    
    55) [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de 
        agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4 
        tentativas para tentar acertar.
*/

var numeroSorteado = parseInt(Math.random() * 11);
var numeroJogador = parseInt(window.prompt("Digite um número"));
var contador = 1

if(numeroSorteado === numeroJogador){
    console.log("Acertou!")
}else{
    while(contador <=3){
        numeroJogador = parseInt(window.prompt("Digite um número"));
        if(numeroSorteado === numeroJogador){
            console.log("Acertou!")
        }else if(contador === 3){
            console.log("Suas tentativas acabaram!!")
        }
        contador += 1
    }
    
}




console.log(numeroSorteado)