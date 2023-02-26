let mySinglyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: null,
          },
        },
      },
    },
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLikedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }

  // append method
  // add a new node to the end of the linked list
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  // prepend method
  // add a new node to the beginning of the linked list
  prepend(value) {
    const newNode = new Node(value);

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
    newNode.next = holdingPointer;

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

    // Se deja que el garbage collector elimine el nodo
    this.length--;
    return this;
  }
}

let singly = new SinglyLikedList(1);

singly.append(2);
singly.append(3);

singly.prepend(0);

singly.insert(2, 4);

singly.remove(2);