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
}

const myFirstHashTable = new HashTable(50); // 50 buckets