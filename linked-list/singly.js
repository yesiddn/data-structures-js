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
    const firtPointer = this.getTheIndex(index - 1); // recupera el nodo anterior al index
    const holdingPointer = firtPointer.next; // se guarda el nodo que se va a desplazar a la siguiente posicion para que el carbage collector no lo borre
    firtPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
    return this;
  }
}

let singly = new SinglyLikedList(1);

doubly.append(2);
doubly.append(3);

doubly.prepend(0);
