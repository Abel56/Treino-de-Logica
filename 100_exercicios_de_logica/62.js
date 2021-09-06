/*
  62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de 
  várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou 
  não continuar a digitar dados. No final, quando o usuário decidir parar, mostre 
  na tela:
  a) Quantas idades foram digitadas
  b) Qual é a média entre as idades digitadas
  c) Quantas pessoas tem 21 anos ou mais.
*/

  var contador = 1, end;
  var idades_digitadas = 0, somaIdade = 0, maior21 = 0, media;
 do {
    var idade = +window.prompt(`Digite a idade da ${contador}° pessoa:`);
    console.log(idade)
    idades_digitadas = contador
    somaIdade += idade

    if(idade > 21)
      maior21 += 1
  
    end = +window.prompt("1 - continuar // 2 - encerrar");

    if (end == 2){
      console.log("Programa encerrado!");
      break;
    }else if(end != 1){
      console.log("Programa encerrado!");
      break;
    }
    contador += 1
 }while(contador == contador)

 media = somaIdade / contador

 console.log(`Foram digitadas exatamente ${idades_digitadas} idades\nA média de idade é${media} anos\nPessoas acima dos 21 anos: ${maior21}`)