let n = 8;
let r = 2;
let subs = n-r;
let num;
let words = n;

for (let i = n; i > subs; i--){
    var answ = words;
    num = i - 1;
    words = words * num;
}
console.log (answ);