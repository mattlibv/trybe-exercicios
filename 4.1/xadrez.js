var p = 'dama'
if (p == "bispo"){
    console.log('diagonais')
} else if (p == "torre"){
    console.log('retas')
} else if (p == 'cavalo') {
    console.log('duas para frente, uma para o lado')
} else if (p == 'rei') {
    console.log('uma casa em qualquer direção')
} else if (p == 'dama') {
    console.log('qualquer direção')
} else {
    console.log('uma casa para a frente')
}