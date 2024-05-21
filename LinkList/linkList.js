class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let prev = this.head;
        while (prev.next) {
          prev = prev.next;
        }
        prev.next = node;
      }
      this.size++;
    }
  
    insert(value, index) {
      if (index < 0 || index > this.size) {
        return;
      }
      if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }
  
    remove(index) {
      if (index < 0 || index > this.size) {
        return null;
      }
      let removeNode;
      if (index === 0) {
        removeNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removeNode = prev.next;
        prev.next = removeNode.next;
      }
      this.size--;
      return removeNode.value;
    }
  
    removeValue(value) {
      if (this.isEmpty()) {
        return null;
      }
      if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        return value;
      } else {
        let prev = this.head;
        while (prev.next && prev.next.value !== value) {
          prev = prev.next;
        }
        if (prev.next) {
          const removeNode = prev.next;
          prev.next = removeNode.next;
          this.size--;
          return value;
        }
        return null;
      }
    }
  
    search(value) {
      if (this.isEmpty()) {
        console.log(`Value ${value} not found`);
        return -1;
      } else {
        let i = 0;
        let curr = this.head;
        while (curr) {
          if (curr.value === value) {
            console.log(`The Value ${value} is in index ${i}`);
            return i;
          }
          curr = curr.next;
          i++;
        }
        console.log(`Value ${value} not found`);
        return -1;
      }
    }
  
    reverse() {
      let prev = null;
      let curr = this.head;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is Empty");
      } else {
        let curr = this.head;
        let listValue = "";
        while (curr) {
          listValue += `${curr.value} `;
          curr = curr.next;
        }
        console.log(listValue);
      }
    }
  }
  
  const list = new LinkList();
  //Result before adding value in the list
  console.log(list.isEmpty());
  console.log(list.getSize());
  
  list.print();
  
  // list.prepend(10);
  // list.prepend(20);
  
  list.append(10);
  list.append(20);
  list.append(30);
  list.insert(25, 2);
  
  //Result after adding value in the list
  console.log(list.isEmpty());
  console.log(list.getSize());
  
  list.print();
  
  // console.log(list.remove(3));
  // console.log(list.removeValue(25));
  // console.log(list.removeValue(20));
  
  // list.search(25);
  // list.search(27);
  list.reverse();
  list.print();