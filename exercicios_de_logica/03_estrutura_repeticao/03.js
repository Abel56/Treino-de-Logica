/* 3) Faça um programa que leia e valide as seguintes informações:
        Nome: maior que 3 caracteres;
        Idade: entre 0 e 150;
        Salário: maior que zero;
        Sexo: 'f' ou 'm';
        Estado Civil: 's', 'c', 'v', 'd';
 */

var nome = window.prompt("Nome: ");
var idade, salario, sexo, estadoCivil;
if (nome.length <= 3) {
    while (nome.length < 3) {
        console.log("Nome precisa ter acima de 3 caracteres.");
        nome = window.prompt("Nome: ");
    }
}
idade = +window.prompt("Idade: ");
if (idade < 0 || idade > 150) {
    while (idade < 0 || idade > 150) {
        console.log("Sua idade precisa ser entre 0 e 150");
        idade = +window.prompt("Idade: ");
    }
}
salario = parseFloat(window.prompt("Salário R$: "));
if (salario <= 0) {
    while (salario <= 0) {
        console.log("Salário não pode ser menor ou igual a zero!")
        salario = parseFloat(window.prompt("Salário R$: "));
    }
}
sexo = window.prompt("sexo F or M");
if (sexo != "f" && sexo != "F" && sexo != "m" && sexo != "M") {
    while (sexo != "f" && sexo != "F" && sexo != "m" && sexo != "M") {
        console.log("Digite F para feminino ou M para masculino!");
        sexo = window.prompt("sexo F or M");
    }
}
estadoCivil = window.prompt("Estado cívil: S/C/V/D");
if (estadoCivil != "S" && estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "C" && estadoCivil != "v" && estadoCivil != "V" && estadoCivil != "d" && estadoCivil != "D") {
    while (estadoCivil != "S" && estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "C" && estadoCivil != "v" && estadoCivil != "V" && estadoCivil != "d" && estadoCivil != "D") {
        console.log("Digite: C para casado, S para solteiro, V para viúvo, D para divorciado");
        estadoCivil = window.prompt("Estado cívil: S/C/V/D");
    }
}

console.log(`Nome: ${nome}\nIdade: ${idade}\nSalário R$: ${salario}\nSexo: ${sexo}\nEstado Cívil: ${estadoCivil}`)