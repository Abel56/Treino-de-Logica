/*
26)Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
*/


var numeroDeEleitores = +window.prompt("Digite a quantidade de eleitores: ");
var votoA = 0, votoB = 0, votoC = 0, voto = 0, votoNulo = 0, nome = "";
var nomeEleitor = "";
while (numeroDeEleitores > 0) {
    nome = window.prompt("Digite seu nome: ")
    voto = +window.prompt(`${nome} Em quem desejar votar?\n1 para candidato A\n2 para candidato B\n3 para candidato C`)
    if (voto == 1) {
        votoA += 1
        nomeEleitor = "Abel"
    } else if (voto == 2) {
        votoB += 1
        nomeEleitor = "Michele"
    } else if (voto == 3) {
        votoC += 1
        nomeEleitor = "Lohan"
    } else {
        window.alert("Candidato inválido, voto não computado!");
        votoNulo += 1
    }

    console.log(`${nome} votou em ${nomeEleitor}`);
    numeroDeEleitores -= 1

}

console.log(`Votos candidato A : ${votoA}\nVotos candidato B : ${votoB}\nVotos candidato C : ${votoC}\nVotos nulos : ${votoNulo}`)
if (votoA > votoB && votoA > votoC) {
    nomeEleitor = "Abel"
    console.log(`${nomeEleitor} é o novo Presidente!`)
} else if (votoB > votoA && votoB > votoC) {
    nomeEleitor = "Michele"
    console.log(`${nomeEleitor} é a nova Presidente!`)
} else {
    nomeEleitor = "Lohan"
    console.log(`${nomeEleitor} é o novo Presidente!`)
}