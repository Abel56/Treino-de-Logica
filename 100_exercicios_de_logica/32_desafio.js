/*
    [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o 
    jogador vai tentar descobrir qual foi o valor sorteado
*/



var jogador_1 = 4
var jogador_2 = 1

var numeroSorteado = parseInt(Math.random() * 5);

if (jogador_1 == numeroSorteado && jogador_2 == numeroSorteado) {
    console.log("Empate!!")
} else if (jogador_1 == numeroSorteado) {
    console.log("Jogador 1 venceu!!")
} else if (jogador_2 == numeroSorteado) {
    console.log("Jogador 2 venceu!!")
} else if (jogador_1 != numeroSorteado && jogador_2 != numeroSorteado) {
    console.log("Não há vencedores nessa rodada!")
}




console.log(numeroSorteado)
