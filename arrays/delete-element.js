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

  // Method to adds an element to the beginning of an array and returns the new length of the array
  /*
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }
  */
  
  // Method to adds one or more elements to the beginning of an array and returns the new length of the array
  unshift(...item) {
    if (item === 0) {
      for (let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = item;
      this.length++;
    } else {
      this.length += item.length;
      for (let i = this.length - 1; i >= item.length; i--) {
        this.data[i] = this.data[i - item.length];
      } // for para reacomodar los elementos del array tantos espacios hacia arriba como elementos se agreguen al principio del array

      for (let i = 0; i < item.length; i++) {
        this.data[i] = item[i];
      } // for para agregar los elementos al principio del array
    }
    return this.length;
  }
}

const newArray = new MyArray();

newArray.push('Duvan');
newArray.push('Diego');
newArray.push('Katherine');
newArray.push('Oscar');

// newArray.pop();
// newArray.myDetele(1);
// newArray.shift();
newArray.unshift('Ana', 'Juan');