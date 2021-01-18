function Queue() {
  let array = [];
  this.enqueue = function (element) {
    array.push(element);
  };
  this.dequeue = function () {
    return array.shift();
  };
  this.front = function () {
    return array[0];
  };
  this.isEmpty = function () {
    return array.length == 0;
  };
  this.size = function () {
    return array.length;
  };
  this.show = function () {
    console.log(array.toString());
  };
}
function PrioQueue() {
  let array = [];
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);
    let added = false;
    for (let i = 0; i < array.length; i++) {
      if (queueElement.priority < array[i].priority) {
        array.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) array.push(queueElement);
  };
  this.dequeue = function () {
    return array.shift();
  };
  this.front = function () {
    return array[0];
  };
  this.isEmpty = function () {
    return array.length == 0;
  };
  this.size = function () {
    return array.length;
  };
  this.show = function () {
    for (let i = 0; i < array.length; i++) {
      console.log(`${array[i].element} -
            ${array[i].priority}`);
    }
  };
}
function e() {
  let prioQueue = new PrioQueue();
  prioQueue.enqueue("Nombre1", 2);
  prioQueue.enqueue("Nombre2", 3);
  prioQueue.enqueue("Nombre3", 4);
  prioQueue.enqueue("Nombre4", 1);
  prioQueue.show();
}
e();
