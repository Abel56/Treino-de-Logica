/*18)Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.

01 - 31
02 - 
03 - 31
04 - 30
05 - 31
06 - 30
07 - 31
08 - 31
09 - 30
10 - 31
11 - 30
12 -31

*/
var dia = 32, mes = 12, ano = 2021;
var data = false

if (mes == 04 || mes == 06 || mes == 09 || mes == 11) {
    if (dia >= 31) {
        console.log("Esse mês vai até o dia 30 apenas");
        data = false
    } else if (dia <= 0) {
        console.log("Erro! dia inválido")
        data = false
    } else {
        data = true
    }
} else if (mes == 2) {
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        if (dia >= 30) {
            console.log("Esse mês no ano " + ano + " vai até o dia 29 apenas");
            data = false

        } else if (dia <= 0) {
            console.log("Erro! dia inválido")
            data = false
        } else {
            data = true
        }
    } else {
        if (dia > 28) {
            console.log("Esse mês no ano " + ano + " vai até o dia 28 apenas");
            data = false
        } else if (dia <= 0) {
            console.log("Erro! dia inválido")
            data = false
        } else {
            data = true
        }
    }
} else if (mes <= 0 && mes > 12) {
    console.log("Mês inválido!")
    data = false
} else if (mes == 01 || mes == 03 || mes == 05 || mes == 07 || mes == 08 || mes == 10 || mes == 12) {
    if (dia > 31) {
        console.log("Dia inválido!");
        data = false
    }  
}else{
    data = true
}
if (data == true) {
    console.log(dia + "/" + mes + "/" + ano)
}




//(mes == 01 || mes == 03 || mes ==05 || mes == 07 || mes == 08|| mes == 10 || mes == 12)