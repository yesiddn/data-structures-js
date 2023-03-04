// Graph type: Undirected graph with adjacent list

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
  
  addEdge(nodeOne, nodeTwo) {
    this.adjacentList[nodeOne].push(nodeTwo);
    this.adjacentList[nodeTwo].push(nodeOne);

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

myGraph.addEdge('1', '3');
myGraph.addEdge('1', '4');
myGraph.addEdge('1', '6');
myGraph.addEdge('3', '5');
myGraph.addEdge('3', '6');
myGraph.addEdge('4', '5');
myGraph.addEdge('4', '8');