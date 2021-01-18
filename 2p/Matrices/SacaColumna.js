var Colum = 2;

class M {
  constructor(mtrz) {
    this.mtrz = mtrz;
  }
  SColum(n) {
    let colm = [];
    for (let i = 1; i <= this.mtrz.length; i++) {
      colm.push(this.mtrz[i - 1][n - 1]);
    }
    console.log(colm);
  }
}
function preub() {
  let object = new M([
    [684, 594, 932],
    [765, 118, 650],
    [918, 494, 654],
  ]);
  console.log("\n Columna", Colum, ":");
  object.SColum(Colum);
}
preub();
