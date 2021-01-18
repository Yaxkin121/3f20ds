function print(elm) {
  return console.log(elm);
}
class G {
  constructor(v) {
    this.verts = v;
    this.edgs = 0;
    this.adp = [];
    for (let i = 0; i < this.verts; i++) {
      this.adp[i] = [];
    }
  }
  ae(v, w) {
    this.adp[v].push(w);
    this.adp[w].push(v);
    this.edgs++;
  }
  sg() {
    for (let i = 0; i < this.verts; ++i) {
      let string = "";
      string += "" + i + " = ";
      for (let j = 0; j < this.verts; ++j) {
        if (this.adp[i][j] != undefined) {
          string += this.adp[i][j] + " ";
        }
      }
      print(string);
    }
  }
  am() {
    return print("Acomodados: " + this.edgs);
  }
}
function e() {
  ys = new G(7);
  ys.ae(0, 1);
  ys.ae(0, 2);
  ys.ae(1, 3);
  ys.ae(2, 4);
  ys.ae(3, 5);
  ys.ae(3, 6);
  ys.sg();
  ys.am();
}
e();
