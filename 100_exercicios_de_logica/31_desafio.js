/*
 [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
*/

var jogador_1 = 'papel'
var jogador_2 = 'pedra'

if (jogador_1 == 'papel' && jogador_2 == 'pedra' || jogador_1 == 'tesoura' && jogador_2 == 'papel' || jogador_1 == 'pedra' && jogador_2 == 'tesoura') {
    console.log(`${jogador_1} vence ${jogador_2}\nParabéns o Jogador 1 ganhou!!`)
} else if (jogador_2 == 'papel' && jogador_1 == 'pedra' || jogador_2 == 'tesoura' && jogador_1 == 'papel' || jogador_2 == 'pedra' && jogador_1 == 'tesoura') {
    console.log(`${jogador_2} vence ${jogador_1}\nParabéns o Jogador 2 ganhou!!`)
} else {
    console.log(`${jogador_1} empata com ${jogador_2}\nJogue novamente!`)
}
