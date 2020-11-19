let nums = [3, 1, 4, 2, 3];
let cant = nums.length;
let temp = 0;

for (let i = 0; i < cant; i++) {
  temp += nums[i];
}
let avg = temp / cant;
console.log("El promedio de las cantidades es:");
console.log(avg);