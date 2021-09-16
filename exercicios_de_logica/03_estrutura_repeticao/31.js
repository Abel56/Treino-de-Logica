/*
 31)O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:
Lojas Tabajara 
Produto 1: R$ 2.20
Produto 2: R$ 5.80
Produto 3: R$ 0
Total: R$ 9.00
Dinheiro: R$ 20.00
Troco: R$ 11.00
... 
*/
var totalCompra = 0, valorProduto = 0, troco = 0, dinheiroCliente = 0;
for (i = 1; i == i; i++) {
    valorProduto = parseFloat(window.prompt(`Valor do ${i}° produto R$: `));
    totalCompra += valorProduto

    console.log(`Valor do ${i}° produto R$: ${valorProduto}`);
    op = +window.prompt("0 - para fechar a conta\n1 - para continuar registrando")
    if (op == 0) {
        break;
    } else if (op != 1) {
        break;
    }
}

dinheiroCliente = parseFloat(window.prompt(`Digite o valor fornecido pelo cliente R$:`))
if (dinheiroCliente >= totalCompra) {
    troco = dinheiroCliente - totalCompra
} else if (totalCompra > dinheiroCliente) {
    troco = dinheiroCliente - totalCompra

}
if (troco < 0) {
    console.log(`Valor da compra R$${totalCompra}\nValor recebido R$${dinheiroCliente}\nCliente ainda deve R$${troco}`)
} else {
    console.log(`Valor da compra R$${totalCompra}\nValor recebido R$${dinheiroCliente}\nTroco do cliente R$${troco}`)
}
