var bruto = 24871
var liquido
var INSS
var IR = 0

if (bruto <= 1556.94) {
    INSS = 0.08*bruto
} else if (bruto >= 1556.95 && bruto <= 2594.92) {
    INSS = 0.09*bruto
} else if (bruto >= 2594.93 && bruto <= 5189.82) {
    INSS = 0.11*bruto
} else {
    INSS = 570.88
}

var brut = bruto - INSS
if (brut >= 1903.99 && brut <= 2826.65) {
    IR = 0.075*brut - 142.80
} else if (brut >= 2826.66 && brut <= 3751.05) {
    IR = 0.15*brut - 354.80
} else if (brut >= 3751.06 && brut <= 4664.68) {
    IR = 0.225*brut - 636.13
} else {
    IR = 0.275*brut - 869.36
}

liquido = brut - IR
console.log(liquido)