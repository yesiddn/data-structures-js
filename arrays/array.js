// Forma usual  de declarar un array y asignarle valores
const array = ['Duvan', 'Diego', 'Katherine', 'Karten'];

array.push('Ana'); // Agrega un elemento al final del array

// Creación de un array desde cero con clases
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Metodo para obtener un elemento del array
  get(index) {
    return this.data[index];
  }

  // Metodo para agregar un elemento al final del array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

const newArray = new MyArray();