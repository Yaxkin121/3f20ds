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

  addEdge(v, w) {
    this.adp[v].push(w);
    this.adp[w].push(v);
    this.edgs++;
  }
  showGraph() {
    for (let i = 0; i < this.verts; ++i) {
      let string = "";
      string += "\n |" + i + "| ~> ";
      for (let j = 0; j < this.verts; ++j) {
        if (this.adp[i][j] != undefined) {
          string += this.adp[i][j] + " ";
        }
      }
      print(string);
    }
  }
  size() {
    return print("\n Tamaño: " + this.verts);
  }
}

function ejemplo() {
  ys = new G(5);
  ys.addEdge(0, 1);
  ys.addEdge(0, 2);
  ys.addEdge(1, 3);
  ys.addEdge(2, 4);
  ys.showGraph();
  ys.size();
}
ejemplo();
