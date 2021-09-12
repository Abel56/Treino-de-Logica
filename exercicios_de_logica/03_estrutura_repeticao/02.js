/* 2) Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
 */

var user = window.prompt("Username: ");
var password = window.prompt("Password: ");

if (user == password){
    console.log("Error! Password and users cannot be the same ")
    while(user == password){
        var user = window.prompt("Username: ");
        var password = window.prompt("Password: ");
    }
}

console.log(user, password)