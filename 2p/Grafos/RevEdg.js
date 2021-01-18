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
  re(source, destination) {
    this.adp[source] = this.adp[source].filter(
      (vertex) => vertex !== destination
    );
    this.adp[destination] = this.adp[destination].filter(
      (vertex) => vertex !== source
    );
    return print("Borde ${source} ~ ${destination} remota");
  }
}
function e() {
  ys = new G(5);
  ys.ae(1, 1);
  ys.ae(2, 2);
  ys.ae(1, 3);
  ys.ae(2, 4);
  ys.sg();
  ys.re(0, 2);
  ys.sg();
}
e();
