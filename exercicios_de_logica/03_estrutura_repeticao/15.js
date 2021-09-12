/* 15)A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo. */
// P  S  R
// 1 ,1, 2,  3,5,8,13,21,34,55
var numeroMaximo = 155//+window.prompt("Numero:");
var primeiro = 1
var segundo = 1
var resultado = 0
console.log(primeiro + "\n" + segundo)
while (resultado < numeroMaximo) {

    resultado = primeiro + segundo
    primeiro = segundo
    segundo = resultado

    console.log(resultado)
}