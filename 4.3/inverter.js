/*let word = 'pneumonia'
let word_rev = ''
for (i = word.length -1; i >= 0; i -= 1){
    word_rev+=word[i]
}
console.log(word_rev);
*/

let word = 'inconstitucionalicimamente';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);