//    10
//  4     20
// 2 8  17  120

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a node
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      
      // Infinite loop until we return out of the function
      while (true) {
        if (value < currentNode.value) { // if the value is less than the value of the current node
          if (!currentNode.left) { // if there's no node to the left
            currentNode.left = newNode; // then we set the node to the left of the current node to be the new node
            return this; // and we exit the function
          }
          currentNode = currentNode.left; // otherwise, we set the current node to be the node to the left of it
        } else { // otherwise, if the value is greater than or equal to the value of the current node
          if (!currentNode.right) { // if there's no node to the right
            currentNode.right = newNode; // then we set the node to the right of the current node to be the new node
            return this; // and we exit the function
          }
          currentNode = currentNode.right; // otherwise, we set the current node to be the node to the right of it
        }
      }
    }
  }

  // Search method
  // Search for a node using a recursive function
  search(value, currentNode = this.root) {
    if (currentNode.value === value) {
      return currentNode;
    } else if (value < currentNode.value) {
      return this.search(value, currentNode.left);
    } else if(value > currentNode.value) {
      return this.search(value, currentNode.right);
    } else {
      return 'Not found';
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(120);