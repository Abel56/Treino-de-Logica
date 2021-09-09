/* 10)Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */

var turno = "v"

switch (turno) {
    case 'm': console.log("Bom dia!"); break; case "M": console.log("Bom dia!"); break;
    case 'v': console.log("Boa tarde!"); break; case "V": console.log("Boa tarde!"); break;
    case 'n': console.log("Boa noite!"); break; case "N": console.log("Boa noite!"); break;
    default: console.log("Valor Inválido!");
}

// if / else

if (turno == "m" || turno == "M") {
    console.log("Bom dia!")
} else if (turno == "v" || turno == "V") {
    console.log("Boa tarde!!")
} else if (turno == "n" || turno == "N") {
    console.log("Boa noite!!")
} else {
    console.log("Valor inválido!")
}
// ternario

turno == "n" ? console.log("Noite") : turno == "N" ? console.log("Noite") : turno == "m" ? console.log("dia") : turno == "M" ? console.log("Dia") : turno == "v" ? console.log("tarde") : turno == "V" ? console.log("Tarde") : console.log("Valor inválido")