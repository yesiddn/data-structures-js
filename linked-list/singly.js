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
}

let singly = new SinglyLikedList(1);

singly.append(2);
