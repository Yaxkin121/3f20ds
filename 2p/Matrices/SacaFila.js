var f = Math.round(Math.random() * 3);
class M {
  constructor(mtrz) {
    this.mtrz = mtrz;
  }
  sf(n) {
    console.log(this.mtrz[n - 1]);
  }
}
function test() {
  let obj = new M([
    [135, 668, 167],
    [651, 984, 65],
    [154, 165, 684],
  ]);
  console.log("Fila ", f, ":");
  obj.sf(f);
}
test();
