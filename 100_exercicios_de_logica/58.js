/*
    58) Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa 
        vai parar quando for digitada a idade 999. No final, mostre quantos alunos 
        existem na turma e qual é a média de idade do grupo.
*/

    var contador = 1
    var somaIdade = 0
    var media;
    console.log("Digite o número 999 para encerrar o programa!")
    while(contador == contador){
        var idade = parseInt(window.prompt(`Digite a idade do ${contador}° aluno:`));
        somaIdade += idade
        console.log("idade e somaIdade " + idade, somaIdade)  
            if(idade == 999){
                console.log("Programa Encerrado!");
                contador -= 1
                break;
            }  
            contador += 1
    }
    
    media = (somaIdade - idade) / contador
    console.log(`A média de idade dos aluno é ${media}`);