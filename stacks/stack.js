class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // peek method
  // return the top node of the stack
  peek() {
    return this.top;
  }

  // push method
  // add a node to the top of the stack
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top; // se guarda el valor de top en holdingPointer para no perderlo por el garbage collector
      this.top = newNode; // se asigna el nuevo nodo a top
      this.top.next = holdingPointer; // se asigna el valor de holdingPointer a next de top
    }

    this.length++;

    return this;
  }

  // pop method
  // remove a node from the top of the stack
  pop() {
    if (this.length === 0) {
      console.log('Stack is empty');
      return null;
    } else if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }

    this.length--;
    return this;
  }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);

myStack.peek();

myStack.pop();