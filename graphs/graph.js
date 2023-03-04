class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  // addVertex method: agrega un nodo al grafo
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;

    return this;
  }
}

const myGraph = new Graph();
myGraph.addVertex('1');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addVertex('8');