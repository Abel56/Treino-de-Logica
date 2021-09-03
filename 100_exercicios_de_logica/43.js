/*
    
   43) Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1, 
marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...
*/


var contador = 30

while (contador > 0) {
    if (contador % 4 == 0) {
        console.log(`[${contador}]`)
    } else {
        console.log(contador)
    }
    contador -= 1
}

/* 
var contador = 0
var texto = ""
while (contador < 300) {
    contador += 1
    texto += contador + " "
    if (contador % 3 == 0) {
        texto += "\n"
    }

}
console.log(texto) */