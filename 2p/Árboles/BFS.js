class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class Arbol {
  constructor() {
    this.root = null;
  }

  addNode(data, pNode) {
    let nodo = new Node(data);
    let p = pNode ? this.BFS(pNode) : null;

    if (p) {
      p.children.push(nodo);
    } else {
      if (!this.root) {
        this.root = nodo;
      } else {
        return "El nodo planteado ya existe.";
      }
    }
  }

  BFS(data) {
    let cola = [this.root];
    let _node = null;

    this.recorrerBFS((nodo) => {
      if (nodo.data == data) _node = nodo;
    });

    return _node;
  }

  recorrerBFS(cb) {
    let cola = [this.root];
    while (cola.length) {
      let nodo = cola.shift();
      if (cb) {
        cb(nodo);
      }
      for (let i = 0; i < nodo.children.length; i++) {
        cola.push(nodo.children[i]);
      }
    }
  }
}

let trree = new Arbol();
trree.addNode("a"),
  trree.addNode("b", "a"),
  trree.addNode("c", "a"),
  trree.addNode("d", "b");
trree.addNode("e", "b"), trree.addNode("f", "c");
trree.addNode("g", "c"),
  trree.recorrerBFS((nodo) => {
    console.log("El nodo actual es: ", nodo);
  });
