let i = 0;
let n = -10;
let arr = [];
for (i; i >= n; i--) {
  if (i % 2 !== 0) {
    arr[i] = i;
    console.log(arr[i]);
    n = n - 1;
  }
}
