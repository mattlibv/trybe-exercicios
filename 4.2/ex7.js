let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 0];
let n = 10000000000;
for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i]<n){
        n = numbers[i]
    }
}
console.log(n)