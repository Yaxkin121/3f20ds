let x = 10;
let imp = 0;
for (let i = 0; i <= x; i++) {
    if (i % 2 !== 0) {
        imp = i-i*2;
        console.log(imp);
        x = x + 1;
    }
}