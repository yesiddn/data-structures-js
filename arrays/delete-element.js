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
}

const newArray = new MyArray();

newArray.push('Duvan');
newArray.push('Diego');
newArray.push('Katherine');
newArray.push('Oscar');

newArray.pop();