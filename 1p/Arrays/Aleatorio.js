let rand;
let arr = [];

for (let i = 0; i <= 9; i++) {
  rand = Math.floor(Math.random() * (10 - 1)) + 1;
  arr[i] = rand;
  console.log(arr[i]);
}
