class Nodo {
  constructor(data, next, previous) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class dobles {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  cs(data) {
    const otroNodo = new Nodo(data, this.head, null);
    if (this.head) {
      otroNodo.next = this.head;
      this.head.previous = otroNodo;
      this.head = otroNodo;
    } else {
      this.head = otroNodo;
      this.tail = otroNodo;
    }
    this.size++;
  }
  cs(data) {
    const nuevoNodo = new Nodo(data, null, this.tail);
    if (this.tail) {
      nuevoNodo.previous = this.tail;
      this.tail.next = nuevoNodo;
      this.tail = nuevoNodo;
    } else {
      this.tail = nuevoNodo;
      this.head = nuevoNodo;
    }
    this.size++;
  }

  ye(data, index) {
    if (index < 0 || index > this.size) return null;
    const newNodo = new Nodo(data, null, null);
    let current = this.head;
    let previous;
    if (index === 0) {
      newNodo.next = current;
      current.previous = newNodo;
      this.head = newNodo;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      newNodo.next = current;
      newNodo.previous = previous;
      current.previous = newNodo;
      previous.next = newNodo;
    }
    this.size++;
  }

  mi() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    return (result += "Nada");
  }

  am() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.previous;
    }
    return (result += "Nada");
  }
}

const DobList = new dobles();
DobList.cs(1);
DobList.cs(2);
DobList.cs(3);
DobList.cs(4);
DobList.ye(2, 0);
console.log("Inicio / Final ", DobList.mi());
console.log("Final / Inicio ", DobList.am());
console.log(DobList);
