function St() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top++] = element;
}
function peek() {
  return this.dataStore[this.top - 1];
}
function pop() {
  return this.dataStore[--this.top];
}
function clear() {
  this.top = 0;
}
function length() {
  return this.top;
}

function fact(n) {
  let ys = new St();
  while (n > 1) {
    ys.push(n--);
  }
  let am = 1;
  while (ys.length() > 0) {
    am *= ys.pop();
  }
  return am;
}
console.log(fact(Math.round(Math.random()*10)));
