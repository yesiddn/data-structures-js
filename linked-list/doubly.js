class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLikedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  // append method
  // add a new node to the end of the linked list
  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  // prepend method
  // add a new node to the beginning of the linked list
  prepend(value) {
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // getTheIndex method to get the node at a specific index
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  // insert method
  insert(index, value) {
    if (this.length <= index) {
      console.log(
        'Index out of range, the value will be added at the end of the list'
      );
      return this.append(value);
    }

    const newNode = new Node(value);

    const firstPointer = this.getTheIndex(index - 1); // recupera el nodo anterior al index
    const holdingPointer = firstPointer.next; // se guarda el nodo que se va a desplazar a la siguiente posicion para que el carbage collector no lo borre

    firstPointer.next = newNode;
    holdingPointer.prev = newNode;
    newNode.next = holdingPointer;
    newNode.prev = firstPointer;

    this.length++;
    return this;
  }

  // remove method
  remove(index) {
    // check params
    // if index is out of range
    if (this.length <= index) {
      console.log('Index out of range');
      return this;
    }

    // if index is head
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;

      this.length--;
      return this;
    }

    // if index is tail
    if (index === this.length - 1) {
      const firstPointer = this.getTheIndex(index - 1);
      firstPointer.next = null;
      this.tail = firstPointer;

      this.length--;
      return this;
    }

    // if index is in the middle
    const firstPointer = this.getTheIndex(index - 1); // recupera el nodo anterior al index
    const holdingPointer = firstPointer.next.next; // se guarda el siguiente nodo al que se va a eliminar
    firstPointer.next = holdingPointer;
    holdingPointer.prev = firstPointer;

    // Se deja que el garbage collector elimine el nodo
    this.length--;
    return this;
  }
}

let doubly = new DoublyLikedList(1);

doubly.append(2);
doubly.append(3);

doubly.prepend(0);

doubly.insert(2, 4);

doubly.remove(2);