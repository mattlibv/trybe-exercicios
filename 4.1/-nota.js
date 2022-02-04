var n = 166
switch (n){
    case (n<0 || n>100):
        console.log("ERRO: nota inválida")
        break
    case (n >= 90):
        console.log('A')
    break
    case (n >= 80):
        console.log('B')
        break
    case (n >= 70):
        console.log('C')
        break
    case (n >= 60):
        console.log('D')
        break
    case (n >= 50):
        console.log('E')
        break
    case (n < 50):
        console.log('F')
        break
}