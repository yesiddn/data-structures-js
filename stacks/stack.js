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

  peek() {
    return this.top;
  }

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

  
}
