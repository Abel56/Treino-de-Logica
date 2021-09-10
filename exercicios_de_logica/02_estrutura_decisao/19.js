/*19) aça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
326 = 3 centenas, 2 dezenas e 6 unidadesF
12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16
*/


var numero = 16

var unidade = numero % 10
var dezenas = (numero - unidade) / 10 % 10
var centenas = parseInt(numero / 100)









console.log(`${centenas} centenas, ${dezenas} dezenas, ${unidade} unidades`)
