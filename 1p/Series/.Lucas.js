let a = 2;
let b = 1;
let temp = a;

console.log(a);
console.log(b);
for (let i = 0; i < 9; i++) {
  temp = a;
  a = b;
  b = temp + b;
  console.log(b);
}