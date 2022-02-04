var a = 60
var b = 31
var c = 90
let triangulo;
if (a<0 || b<0 || c<0){
    console.log('ERRO: triângulo inválido')
} else if (a+b+c==180){
    triangulo = true
    console.log(triangulo)
} else {
    triangulo = false
    console.log(triangulo)
}