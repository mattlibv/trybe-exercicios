var custo = 100
var venda = 200
if (custo < 0 || venda < 0){
    console.log('ERRO: valor inválido')
} else {
    var custo_total = 1.2*custo
    var lucro = venda - custo_total
    console.log(lucro)
}