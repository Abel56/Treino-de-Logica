//DESAFIO DEVMEDIA YOUTUBE ESTAGIÁRIO

var emailCadastro = 'abel', senhaCadastro = '12345';
var senha = 0, usuario = "", novaTentativa = 0;

usuario = window.prompt("Username: ");
if (usuario == emailCadastro) {
    senha = +window.prompt("Password: ");
    if (senha == senhaCadastro) {
        console.log("Acesso permitido!")
        console.log("Bem vindo!" + usuario)
    } else {
        while (senha != senhaCadastro) {
            novaTentativa = +window.prompt("1 - continuar\n2 - encerrar");
            if (novaTentativa == 1) {
                senha = +window.prompt("Password: ");
                if(senha == senhaCadastro){
                    console.log("Acesso permitido!")
                    console.log("Bem vindo!" + usuario)  
                }
            } else {
                console.log("Programa encerrado!")
                break;
            }
        }
    }
} else {
    console.log("Usuário inválido!");
}

