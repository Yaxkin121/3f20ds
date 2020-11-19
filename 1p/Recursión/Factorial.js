function F(num) {
    if (num == 1) return num;
    return num * F(num - 1);
}
console.log(F(7));