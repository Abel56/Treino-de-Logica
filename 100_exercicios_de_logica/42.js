/*
    
   42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo 
        qualquer e mostre uma contagem até esse valor:
        Ex: Digite um valor: 35
        Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!
*/


//loop while
var numero = 35
var contador = 1

while (contador <= numero) {
    console.log(contador)
    contador += 1
}
console.log("Fim while")
//loop for

for (i = 1; i <= numero; ++i) {
    console.log(i)
}
console.log("Fim for")