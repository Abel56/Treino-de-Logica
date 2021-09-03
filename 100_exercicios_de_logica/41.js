/*
    
    41) Desenvolva um programa que mostre na tela a seguinte contagem:
    100 95 90 85 80 ... 0 Acabou!
*/


//loop while
var contador = 100

while (contador >= 0) {
    console.log(contador)
    contador -= 5
}
console.log("FIm while")
//loop for

for (i = 100; i >= 0; i -= 5) {
    console.log(i)
}

console.log("FIm for")
