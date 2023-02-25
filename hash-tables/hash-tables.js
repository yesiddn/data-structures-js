class HashTable {
  constructor(size) {
    this.data = new Array(size); // Array of buckets (empty)
  }

  // Hash function
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // Get method
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  
  // Get all keys
  getAllKeys() {
    const keys = [];

    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];
      
      if (currentBucket) {
        if (currentBucket.length === 1) {
          keys.push(currentBucket[0][0]);          
        } else if (currentBucket.length > 1) {
          for (let j = 0; j < currentBucket.length; j++) {
            keys.push(currentBucket[j][0]);
          }          
        }
      }
    }

    return keys;
  }

  // Set method
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
    /* 
    [ 
      [ 
        [ 'grapes', 10000 ] 
      ], 
      [ 
        [ 'apples', 9 ] , 
        [ 'oranges', 10 ] 
      ] 
    ]
    */
  }

  // delete method
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deleted = currentBucket[i];
          currentBucket.splice(i, 1);
          return deleted;
        }
      }
    }

    return undefined;
  }
}

const myFirstHashTable = new HashTable(50); // 50 buckets

myFirstHashTable.set('Duvan', 2004); // (50) [empty × 34, Array(1), empty × 15] en la posición 34 se encuentra el array con el key y el value que se le asignó
myFirstHashTable.set('Ana', 2000);

myFirstHashTable.get('Duvan'); // 2004