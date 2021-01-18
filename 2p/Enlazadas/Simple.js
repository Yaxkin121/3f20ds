class Nodo {
  constructor(ins, nxt) {
    this.ins = ins;
    this.nxt = nxt;
  }
}
class Enlazada {
  constructor() {
    this.ini = null;
    this.count = 0;
  }
  añadir(ins) {
    let No2 = new Nodo(ins, null);
    if (!this.ini) this.ini = No2;
    else {
      let nw = this.ini;
      while (nw.nxt) {
        nw = nw.nxt;
      }
      nw.nxt = No2;
    }
    this.count++;
  }
}
const list = new Enlazada();
console.log("Empty list ", list);
list.añadir("First");
list.añadir("Second");
list.añadir("Third");
console.log("Listado ", list);
