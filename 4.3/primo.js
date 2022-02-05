let maior_primo = 0;

for (let i = 0; i <= 5000; i += 1) {
    let eh_primo = true;
    for (let div = 2; div < i; div += 1) {
        if (i%div == 0) {
            eh_primo = false;
        }
    }
    if (eh_primo) {
        maior_primo = i;
    }
}

console.log(maior_primo)