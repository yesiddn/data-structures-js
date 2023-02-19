class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  // Metodo para eliminar el último elemento de un array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1]; // delete es una palabra reservada de JS que permite eliminar un elemento de un objeto
    this.length--;
    return lastItem;
  }

  // Method to delete an element from an array in a specific position
  myDetele(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  // Method to delete the first element from an array
  shift() {
    return this.myDetele(0);
  }
}

const newArray = new MyArray();

newArray.push('Duvan');
newArray.push('Diego');
newArray.push('Katherine');
newArray.push('Oscar');

// newArray.pop();
// newArray.myDetele(1);
newArray.shift();