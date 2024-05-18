class Queue {
  constructor() {
    this.item = [];
  }

  enqueue(element) {
    this.item.push(element);
  }

  dequeue() {
    return this.item.shift();
  }

  isEmpty() {
    return this.item.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.item[0];
    }
    return null;
  }

  size() {
    return this.item.length;
  }

  print() {
    console.log(this.item.toString());
  }
}

const queue = new Queue();
for (let i = 0; i <= 100; i++) {
  if (i % 10 === 0) {
    queue.enqueue(i);
  }
}
queue.print();
console.log("Remove item: ", queue.dequeue());
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
