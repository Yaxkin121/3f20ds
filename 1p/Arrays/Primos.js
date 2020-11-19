let i = 2;
let j = 0;
let contador = 0;
let x = 10;
let arr = [];

while (i <= x + 1) {
  while (j < i) {
    if (i % j == 0 && j != 1) {
      contador = 1;
    }
    j++;
  }
  if (contador == 0) {
    arr[i] = j;
    console.log(arr[i]);
  } else {
    contador = 0;
    x = x + 1;
  }
  i++;
  j = 0;
}
