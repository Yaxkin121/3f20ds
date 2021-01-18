function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}
function enqueue(element) {
  this.dataStore.push(element);
}
function dequeue() {
  return this.dataStore.shift();
}
function front() {
  return this.dataStore[0];
}
const back = () => {
  return this.dataStore[this.dataStore.length - 1];
};
const toString = () => {
  let retStr = "";
  for (let i = 0; i < this.dataStore.length; ++i)
    retStr += this.dataStore[i] + "\n";
  return retStr;
};
function empty() {
  if (this.dataStore.length == 0) return true;
  else return false;
}
function Dancer(nombre, s) {
  this.nombre = nombre;
  this.s = s;
}
const dance = (hombre, mujer) => {
  print("Las parejas de baile son: \n");
  while (!mujer.empty() && !hombre.empty()) {
    person = mujer.dequeue();
    print("La bailarina es: " + person.nombre);
    person = hombre.dequeue();
    print("El bailador es: " + person.nombre + "\n");
  }
};
const print = (element) => {
  return console.log(element);
};

const e = () => {
  let dMasculino = new Queue();
  dMasculino.enqueue(new Dancer("Nombre1", "H"));
  dMasculino.enqueue(new Dancer("Nombre2", "H"));

  let dMujeres = new Queue();
  dMujeres.enqueue(new Dancer("Nombre3", "M"));

  dance(dMasculino, dMujeres);
  if (!dMujeres.empty())
    print(dMujeres.front().nombre + " en espera a bailar.");

  if (!dMasculino.empty())
    print(dMasculino.front().nombre + " en espera a bailar.");
};
e();
