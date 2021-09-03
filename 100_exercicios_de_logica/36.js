/*
    36) Um programa de vida saudável quer dar pontos atividades físicas que podem 
ser trocados por dinheiro. O sistema funciona assim:
 - Cada hora de atividade física no mês vale pontos
 - até 10h de atividade no mês: ganha 2 pontos por hora
 - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
 - acima de 20h de atividade no mês: ganha 10 pontos por hora
 - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos) 
*/

var horaRush = 5
var pontos;

if (horaRush <= 10) {
    pontos = 2 * horaRush
} else if (horaRush > 10 && horaRush <= 20) {
    pontos = 5 * horaRush
} else {
    pontos = 10 * horaRush
}

valor_a_receber = pontos * 0.05

console.log(`Você possui ${pontos} pontos de AF\nE pode regastar um valor de R$${valor_a_receber}`)