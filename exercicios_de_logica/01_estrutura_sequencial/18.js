/* 18) 
         um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).
*/

var tamanhoArquivo = 585//+window.prompt("Tamanho Arquivo em MB:")
var velocidadeNet = 4//+window.prompt("Velocidade da NET:")

var velocidadeDownload = velocidadeNet / 8 //Bits
var tempoTransferencia = (tamanhoArquivo / velocidadeDownload) / 60
var minutos = Math.floor(tempoTransferencia)
var segundos = (tamanhoArquivo / velocidadeDownload) % 60



console.log(`A tranferência do arquivo vai demorar ${minutos}minutos e ${segundos}segundos`)