class Stack {
  constructor() {
    this.items = [];
  }

  // Adds an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Removes and returns the top element from the stack
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items.pop();
  }

  // Returns the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.items[this.items.length - 1];
  }

  // Returns true if the stack is empty, false otherwise
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the number of elements in the stack
  size() {
    return this.items.length;
  }

  // Empties the stack
  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

// Usage example:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // 10, 20, 30
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.size()); // 1
console.log(stack.isEmpty()); // false
stack.clear();
console.log(stack.isEmpty()); // true
