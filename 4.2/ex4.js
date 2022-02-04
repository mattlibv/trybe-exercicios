let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let i = 0; i < numbers.length; i += 1){
    sum = sum + numbers[i];
}
let media = sum/(numbers.length-1);
let msg;
if (media>20) {
    msg = 'valor maior que 20'
} else {
    msg = 'valor menor que 20'
}
console.log(msg);