/*
    24) Faça um algoritmo que pergunte a distância que um passageiro deseja 
    percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para 
    viagens até 200Km e R$0.45 para viagens mais longas
*/

var distancia = 201 //km
var valor;
if (distancia <= 200) {
    valor = distancia * 0.5
} else if (distancia > 200) {
    valor = distancia * 0.45
}

console.log(`Percurso: ${distancia}Km\nValor à pagar: R$${valor}`)
