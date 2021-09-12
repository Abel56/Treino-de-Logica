/*16) A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500.*/
// P  S  R
// 1 ,1, 2,  3,5,8,13,21,34,55

var numeroMaximo = 500
var primeiro = 1, segundo = 1, resultado = 0;

while (resultado <= 500) {
    resultado = primeiro + segundo
    primeiro = segundo
    segundo = resultado

    console.log(resultado)

}

