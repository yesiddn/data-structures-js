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
            next: null
          }
        }
      }
    }
  }
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
    }
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
  }

  // prepend method
  // add a new node to the beginning of the linked list
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }
}

let singly = new SinglyLikedList(1);

singly.append(2);
singly.append(3);

singly.prepend(0);
