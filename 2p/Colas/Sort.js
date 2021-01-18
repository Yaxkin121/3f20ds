function Queue() {
  this.dStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}
function enqueue(element) {
  this.dStore.push(element);
}
function dequeue() {
  return this.dStore.shift();
}
function front() {
  return this.dStore[0];
}
function back() {
  return this.dStore[this.dStore.length - 1];
}

function toString() {
  let retStr = "";
  for (let i = 0; i < this.dStore.length; ++i)
    retStr += this.dStore[i] + "\n";
  return retStr;
}
function empty() {
  if (this.dStore.length == 0) return true;
  else return false;
}
const show = (element) => {
  return console.log(element);
};
const distribute = (numbers, queues, n, digit) => {
  for (let i = 0; i < n; ++i) {
    if (digit == 1) queues[numbers[i] % 10].enqueue(numbers[i]);
    else queues[Math.floor(numbers[i] / 10)].enqueue(numbers[i]);
  }
};
const collect = (queues, numbers) => {
  let i = 0;
  for (let digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) numbers[i++] = queues[digit].dequeue();
  }
};
const dispArray = (arr) => {
  let display = [];
  for (let i = 0; i < arr.length; ++i) {
    display.push(arr[i] + " ");
  }
  show(display);
};
const princ = () => {
  let queues = [];
  for (let i = 0; i < 10; ++i) {
    queues[i] = new Queue();
  }
  let numbers = [];
  for (let i = 0; i < 10; ++i) {
    numbers[i] = Math.floor(Math.floor(Math.random() * 101));
  }
  show("\nAntes del arreglo: \n");
  dispArray(numbers);
  distribute(numbers, queues, 10, 1);
  collect(queues, numbers);
  distribute(numbers, queues, 10, 10);
  collect(queues, numbers);
  show("\nDespués del arreglo: ");
  dispArray(numbers);
};
princ();