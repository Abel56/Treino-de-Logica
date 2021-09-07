/*
  68) Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura 
    “para”. No final, mostre na tela:
    a) Quantas mulheres foram cadastradas
    b) Quantos homens pesam mais de 100Kg
    c) A média de peso entre as mulheres 
    d) O maior peso entre os homens
*/
var quantidadeMulher = 0, pesoTotalMulher = 0, mediaPesoMulher;
var homem100 = 0, maiorPesoHomem = 0;

for (i = 1; i <= 3; i++) {
  var sexo = window.prompt("Digite o seu sexo: F/M");
  var peso = parseFloat(window.prompt("Digite o seu peso"));

  console.log("Sexo: " + sexo + "Peso: " + peso)


  if (sexo == "f" || sexo == "F") {
    quantidadeMulher += 1
    pesoTotalMulher += peso
    mediaPesoMulher = pesoTotalMulher / quantidadeMulher
  }else if(sexo == "m" || sexo == "M"){
    if(peso > 100){
     homem100 += 1 
    }
    if(peso > maiorPesoHomem)
    maiorPesoHomem = peso
  }

}
console.log(`Total mulheres: ${quantidadeMulher}\nHomens com mais de 100kg ${homem100}\nMédia peso mulher: ${mediaPesoMulher}\nMaior peso homem: ${maiorPesoHomem}`)

