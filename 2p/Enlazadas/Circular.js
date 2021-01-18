function Circ() {
  let Nodo = function (element) {
    this.element = element;
    this.next = null;
  };
  let length = 0;
  let head = null;

  this.append = function (element) {
    let node = new Nodo(element),
      current;

    if (head === null) {
      head = node;
    } else {
      current = this.getElementAt(length - 1);

      current.next = node;
    }
    node.next = head;
    length++;
  };
  this.insert = function (index, element) {
    if (index >= 0 && index <= length) {
      let node = new Nodo(element);
      let current = head;
      if (index === 0) {
        if (head === null) {
          head = node;
          node.next = head;
        } else {
          node.next = current;
          current = this.getElementAt(length);
          head = node;
          current.next = head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      length++;
      return true;
    }
    return false;
  };
  this.getElementAt = function (index) {
    if (index >= 0 && index <= length) {
      let node = head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  };
  this.removeAt = function (index) {
    if (index >= 0 && index < length) {
      let current = head;
      if (index === 0) {
        if (length === 1) {
          head = undefined;
        } else {
          const removed = head;
          current = this.getElementAt(length - 1);
          head = head.next;
          current.next = head;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      length--;
      return current.element;
    }
    return undefined;
  };
  this.toString = function (element) {
    let current = head,
      string = "",
      temp = head.element;

    while (current) {
      if (temp === current.next.element) {
        string += current.element + (current.next ? "" : "");
        break;
      }
      string += current.element + (current.next ? " ~ " : "");
      current = current.next;
    }
    return console.log(string);
  };
}

const cons = () => {
  let lista = new Circ();
  console.log("Elemento 465, 984 y 164 ");
  lista.append(465);
  lista.append(984);
  lista.append(164);
  lista.toString();
  console.log();

  console.log("Elemento 351 añadido al índice #2:");
  lista.insert(2, 351);
  lista.toString();
  console.log();

  console.log("Elemento borrado del índice #3");
  lista.removeAt(3);
  lista.toString();
  console.log();

  lista.getElementAt(1);
};
cons();
