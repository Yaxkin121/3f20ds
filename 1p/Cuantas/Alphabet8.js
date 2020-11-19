let alphabet = 8;
let simb = 8;
let subs = alphabet-simb, num;
let words = alphabet;

for (let i = alphabet; i > subs; i--){
    var answ = words;
    num = i - 1;
    words = words * num;
}
console.log (answ);