/*
    45) O programa abaixo vai ter um problema quando digitarmos o primeiro valor 
    maior que o último. Resolva esse problema com um código que funcione em qualquer 
    situação
 
*/



var valor_inicial = 30
var valor_final = 1
var valor_incremento = 1


if (valor_inicial >= valor_final) {
    while (valor_inicial >= valor_final) {
        console.log(valor_inicial)
        valor_inicial -= valor_incremento
    }
} else {
    while (valor_inicial <= valor_final) {
        console.log(valor_inicial)
        valor_inicial += valor_incremento
    }
}


















/* var texto = "";
for (var i = 30; i > 0; i--) {
    (i % 4 == 0) ? texto += "[" + i + "] " : texto += i + " ";
    if (i % 3 == 0)
        texto += "\n"
}
console.log(texto); */