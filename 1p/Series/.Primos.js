let i = 2;
let j = 0;
let marca = 0;
let x = 10;

while (i <= x + 1) {
  while (j < i) {
    if (i % j == 0 && j != 1 && j != i) {
      marca = 1;
    }
    j++;
  }

  if (marca == 0) {
    console.log(j);
  } else {
    marca = 0;
    x = x + 1;
  }
  i++;
  j = 0;
}